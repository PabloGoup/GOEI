import assert from "node:assert/strict";
import test from "node:test";
import { evidenceExtension, evidenceMaxBytes, isEvidenceFileAllowed } from "../src/domain/evidence.ts";

test("la evidencia acepta únicamente formatos controlados",()=>{
  assert.equal(isEvidenceFileAllowed("application/pdf",1024),true);
  assert.equal(isEvidenceFileAllowed("image/png",1024),true);
  assert.equal(isEvidenceFileAllowed("application/zip",1024),false);
});

test("la evidencia aplica límite positivo de 15 MB",()=>{
  assert.equal(isEvidenceFileAllowed("text/csv",0),false);
  assert.equal(isEvidenceFileAllowed("text/csv",evidenceMaxBytes),true);
  assert.equal(isEvidenceFileAllowed("text/csv",evidenceMaxBytes+1),false);
});

test("cada tipo permitido conserva una extensión determinista",()=>{
  assert.equal(evidenceExtension("application/pdf"),"pdf");
  assert.equal(evidenceExtension("image/jpeg"),"jpg");
  assert.equal(evidenceExtension("image/png"),"png");
  assert.equal(evidenceExtension("text/csv"),"csv");
});
