export class RemoteServiceTimeout extends Error {
  constructor(readonly operation: string) {
    super(`La operación ${operation} superó el tiempo de espera.`);
    this.name = "RemoteServiceTimeout";
  }
}

export async function waitForRemote<T>(operation: string, promise: PromiseLike<T>, timeoutMs = 8000): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new RemoteServiceTimeout(operation)), timeoutMs);
  });
  try {
    return await Promise.race([Promise.resolve(promise), timeout]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}
