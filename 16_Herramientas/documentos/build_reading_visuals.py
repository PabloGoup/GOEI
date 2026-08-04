#!/usr/bin/env python3
"""Generate explanatory PNG diagrams for the GOEI reading document."""

from pathlib import Path
from textwrap import wrap

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "12_Tesis" / "figuras" / "documento_lectura"
OUT.mkdir(parents=True, exist_ok=True)

NAVY = "#17365D"; BLUE = "#2E75B6"; TEAL = "#2A7F8E"; GREEN = "#548235"
GOLD = "#BF9000"; RED = "#A61C2A"; GRAY = "#5B6573"; LIGHT = "#EEF3F8"
WHITE = "#FFFFFF"; INK = "#17212B"
FONT_REG = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"


def font(size, bold=False):
    return ImageFont.truetype(FONT_BOLD if bold else FONT_REG, size)


class Diagram:
    def __init__(self, title, subtitle=""):
        self.im = Image.new("RGB", (2200, 1250), WHITE)
        self.d = ImageDraw.Draw(self.im)
        self.d.text((75, 55), title, font=font(36, True), fill=NAVY)
        if subtitle:
            self.d.text((75, 112), subtitle, font=font(22), fill=GRAY)

    def box(self, xy, text, edge=BLUE, fill=LIGHT, size=24, bold=False, radius=20):
        x1, y1, x2, y2 = xy
        self.d.rounded_rectangle(xy, radius=radius, fill=fill, outline=edge, width=4)
        lines = []
        for paragraph in text.split("\n"):
            lines.extend(wrap(paragraph, width=max(8, int((x2-x1)/(size*0.62)))) or [""])
        f = font(size, bold)
        spacing = int(size * 0.32)
        bbox = self.d.multiline_textbbox((0, 0), "\n".join(lines), font=f, spacing=spacing, align="center")
        tw, th = bbox[2]-bbox[0], bbox[3]-bbox[1]
        self.d.multiline_text(((x1+x2-tw)/2, (y1+y2-th)/2), "\n".join(lines), font=f,
                              fill=INK, spacing=spacing, align="center")

    def arrow(self, start, end, color=GRAY, width=5):
        self.d.line([start, end], fill=color, width=width)
        x1, y1 = start; x2, y2 = end
        import math
        angle = math.atan2(y2-y1, x2-x1)
        length = 18
        pts = [(x2, y2),
               (x2-length*math.cos(angle-0.55), y2-length*math.sin(angle-0.55)),
               (x2-length*math.cos(angle+0.55), y2-length*math.sin(angle+0.55))]
        self.d.polygon(pts, fill=color)

    def text(self, xy, text, size=24, color=INK, bold=False, anchor="la", align="left"):
        self.d.multiline_text(xy, text, font=font(size, bold), fill=color, anchor=anchor,
                              align=align, spacing=int(size*0.3))

    def save(self, name):
        self.im.save(OUT / name, quality=95)


def mind_map():
    v = Diagram("Mapa mental del proyecto GOEI", "El estándar conecta ciencia, arquitectura, aplicación y resultados académicos")
    v.d.ellipse((920, 440, 1280, 800), fill=NAVY)
    v.text((1100, 620), "GOEI\nSalud operacional", 30, WHITE, True, "mm", "center")
    nodes = [
        ((90, 275, 590, 500), "Gobernanza\nConstitución · decisiones\nIssues · baselines", BLUE),
        ((90, 780, 590, 1005), "Conocimiento\nOntología · taxonomía\nprocesos · Knowledge Graph", TEAL),
        ((1610, 275, 2110, 500), "Método científico\nEvidencia · KPI\nGTRM · validación", GREEN),
        ((1610, 780, 2110, 1005), "Aplicación\nFormularios · manuales\npapel · software", GOLD),
        ((790, 975, 1410, 1160), "Resultados\nEstándar · tesis · publicación", RED),
    ]
    for xy, text, color in nodes:
        v.box(xy, text, color, LIGHT, 25, True)
        x1,y1,x2,y2=xy; v.arrow((1100,620),((x1+x2)//2,(y1+y2)//2),color,6)
    v.save("01_mapa_mental_goei.png")


def authority_map():
    v = Diagram("Mapa de autoridad y responsabilidades", "La autoridad científica y la integración técnica permanecen separadas")
    v.box((740, 190, 1460, 330), "Director General\nPablo Toledo Salinas", NAVY, "#E7EEF7", 28, True)
    v.box((790, 390, 1410, 510), "Comité Directivo GOEI", BLUE, LIGHT, 27, True)
    v.box((120, 660, 930, 900), "Comité Científico · Claude\nInvestiga · interpreta evidencia\npropone decisiones metodológicas", GREEN, "#EEF5E9", 24, True)
    v.box((1270, 660, 2080, 900), "Oficina Técnica · Codex\nArquitectura · trazabilidad · versiones\nintegración · Git · auditoría", TEAL, "#E7F3F5", 24, True)
    v.box((700, 1010, 1500, 1170), "GOEI Framework\ncomponentes aprobados y controlados", RED, "#F8EAEC", 27, True)
    v.arrow((1100,330),(1100,390),NAVY); v.arrow((1100,510),(525,660),GREEN); v.arrow((1100,510),(1675,660),TEAL)
    v.arrow((525,900),(900,1010),GREEN); v.arrow((1675,900),(1300,1010),TEAL)
    v.save("02_mapa_autoridad.png")


def traceability_flow():
    v = Diagram("Cadena de trazabilidad del conocimiento", "Cada componente puede recorrerse desde su evidencia hasta la versión publicada")
    labels=[("Evidencia\ny fuentes",GREEN),("Investigación\ny debate",TEAL),("Decisión\ncientífica",BLUE),("Auditoría\ntécnica",GOLD),("Resolución\ndirectiva",NAVY),("Componente\nversionado",RED),("Baseline /\nrelease",GRAY)]
    xs=[55,360,665,970,1275,1580,1885]
    for i,((label,color),x) in enumerate(zip(labels,xs)):
        v.box((x,460,x+245,670),label,color,LIGHT,22,True)
        if i<len(xs)-1:v.arrow((x+245,565),(xs[i+1],565),GRAY)
    v.box((360,835,830,1005),"Issue\nbloquea una rama",RED,"#F8EAEC",25,True)
    v.box((1370,835,1840,1005),"Knowledge Graph\nconserva dependencias",TEAL,"#E7F3F5",25,True)
    v.arrow((595,835),(760,670),RED);v.arrow((1605,835),(1660,670),TEAL)
    v.text((1100,260),"Evidencia → decisión → integración → versión reproducible",30,NAVY,True,"mm","center")
    v.save("03_flujo_trazabilidad.png")


def process_map():
    v=Diagram("Mapa operacional universal P1–P9","D-008 aprobó un núcleo funcional; las actividades concretas pueden variar por categoría")
    labels=["P1\nPlanificación\ny demanda","P2\nAprovisionamiento","P3\nRecepción, almacén\ne inventario","P4\nProducción /\npreparación","P5\nServicio /\ncumplimiento","P6\nTransacción\ny cierre"]
    xs=[55,410,765,1120,1475,1830]
    for i,(x,label) in enumerate(zip(xs,labels)):
        v.box((x,350,x+300,570),label,BLUE,"#E9F1FA",21,True)
        if i<5:v.arrow((x+300,460),(xs[i+1],460),BLUE)
    for y,label,color in [(680,"P7 · Inocuidad e higiene · plano transversal",GREEN),(825,"P8 · Mantenimiento · plano transversal",GOLD),(970,"P9 · Gestión · plano transversal",TEAL)]:
        v.box((150,y,2050,y+95),label,color,LIGHT,24,True)
    v.save("04_mapa_operacional_p1_p9.png")


def timeline():
    v=Diagram("Línea temporal de construcción","Decisiones congeladas, situación actual y continuación prevista")
    v.d.line((100,640,2070,640),fill=GRAY,width=6)
    items=[(150,"Constitución\ny repositorio",BLUE,400),(440,"EPIC-001\nMetaModel y KG",TEAL,820),(730,"D-006\nOntología v0.1",NAVY,400),(1020,"D-008\nB1 Procesos",GREEN,820),(1310,"D-017\nB2 Taxonomía",GOLD,400),(1600,"D-018\nB3 Candidatos",RED,820),(1890,"B4\npreparada",GRAY,400)]
    for x,label,color,ty in items:
        v.d.ellipse((x-16,624,x+16,656),fill=color)
        v.d.line((x,640,x,ty+(80 if ty<640 else -20)),fill=color,width=4)
        v.text((x,ty),label,23,INK,True,"mm","center")
    v.arrow((1910,640),(2110,640),RED,7);v.text((2040,760),"D-019\npendiente",24,RED,True,"mm","center")
    v.save("05_linea_tiempo.png")


def gtrm_flow():
    v=Diagram("Mapa conceptual de la transformación GTRM","D-009–D-016 separan datos, referencias, transformación y significado")
    labels=["Fenómeno\nreal","Observación","Medición\nregistrada","Valor KPI","Referencia /\nbenchmark","Función\nGTRM","Puntuación\nnormalizada","Interpretación"]
    colors=[GRAY,TEAL,TEAL,BLUE,GOLD,NAVY,RED,GREEN];xs=[35,305,575,845,1115,1385,1655,1925]
    for i,(x,label,color) in enumerate(zip(xs,labels,colors)):
        v.box((x,450,x+230,650),label,color,LIGHT,20,True)
        if i<7:v.arrow((x+230,550),(xs[i+1],550),GRAY)
    v.box((650,850,1030,1000),"Tabla manual",BLUE,"#E9F1FA",25,True)
    v.box((1170,850,1550,1000),"Implementación software",TEAL,"#E7F3F5",25,True)
    v.arrow((1500,650),(840,850),BLUE);v.arrow((1500,650),(1360,850),TEAL)
    v.text((1100,260),"La GTRM recibe el valor KPI y produce una puntuación normalizada",29,NAVY,True,"mm","center")
    v.text((1100,1100),"Dos representaciones de una misma especificación normativa",25,NAVY,True,"mm","center")
    v.save("06_mapa_gtrm.png")


def phase_pipeline():
    v=Diagram("Pipeline operativo desde B1 hasta B10","Cada fase exige decisión, auditoría, resolución e integración antes de abrir la siguiente")
    phases=[("B1","Procesos",GREEN,"CERRADA"),("B2","Taxonomía",GREEN,"CERRADA"),("B3","Candidatos KPI",GREEN,"CERRADA"),("B4","Admisibilidad",GOLD,"ACTUAL"),("B5","Medición y referencias",GRAY,"PENDIENTE"),("B6","GTRM y puntuación",GRAY,"PENDIENTE"),("B7","Ponderación y agregación",GRAY,"PENDIENTE"),("B8","Interpretación",GRAY,"PENDIENTE"),("B9","Formularios y equivalencia",GRAY,"PENDIENTE"),("B10","Manual y BOK",GRAY,"PENDIENTE")]
    xs=[70,495,920,1345,1770];ys=[290,720]
    for idx,(code,label,color,status) in enumerate(phases):
        row,col=divmod(idx,5);x,y=xs[col],ys[row]
        fill="#EAF4E4" if status=="CERRADA" else ("#FFF4D6" if status=="ACTUAL" else LIGHT)
        v.box((x,y,x+350,y+235),f"{code}\n{label}\n{status}",color,fill,23,True)
        if col<4:v.arrow((x+350,y+117),(xs[col+1],y+117),GRAY)
    v.arrow((1945,525),(1945,650),GRAY);v.arrow((1945,650),(245,650),GRAY);v.arrow((245,650),(245,720),GRAY)
    v.text((1100,1130),"Pregunta científica → expediente → auditoría → resolución → baseline → siguiente fase",25,NAVY,True,"mm","center")
    v.save("07_pipeline_b1_b10.png")


def status_map():
    v=Diagram("Mapa de estado: terminado, en curso y pendiente","La infraestructura técnica está adelantada respecto del contenido científico definitivo")
    cols=[(70,"TERMINADO",GREEN,["Gobernanza y Git","Knowledge Graph","D-006 ontología","B1 procesos","B2 taxonomía","B3 candidatos","Marco GTRM"]),(790,"EN CURSO",GOLD,["B4 admisibilidad","Resolución D-019","Issues selectivos","Control de tokens"]),(1510,"PENDIENTE",RED,["B5–B10","Fórmula y reglas críticas","Formularios y manual piloto","Validación real","Estándar candidato","Tesis","Publicación","Software"])]
    for x,title,color,items in cols:
        v.box((x,230,x+620,360),title,color,LIGHT,29,True)
        y=420
        for item in items:
            v.text((x+35,y),"• "+item,25,INK);y+=80
    v.text((1100,1135),"Integridad técnica ≠ validez científica completa",30,RED,True,"mm","center")
    v.save("08_mapa_estado.png")


def destination_flow():
    v=Diagram("Ruta desde el estándar hasta la tesis y la publicación","La tesis y el artículo dependen del estándar validado, no al revés")
    stages=[(80,"B4–B10\nDecisiones metodológicas",BLUE),(500,"Candidato\ndel estándar",NAVY),(920,"Validación\nexpertos + casos reales",GREEN),(1340,"Estándar GOEI\nversionado",RED)]
    for i,(x,label,color) in enumerate(stages):
        v.box((x,480,x+340,700),label,color,LIGHT,24,True)
        if i<3:v.arrow((x+340,590),(stages[i+1][0],590),GRAY)
    v.box((1770,300,2120,500),"Tesis terminada",TEAL,"#E7F3F5",27,True)
    v.box((1770,720,2120,920),"Publicación académica",GOLD,"#FFF4D6",27,True)
    v.arrow((1680,590),(1770,400),TEAL);v.arrow((1680,590),(1770,820),GOLD)
    v.text((1100,1070),"Software y formularios implementan la especificación; no la sustituyen.",25,NAVY,True,"mm","center")
    v.save("09_ruta_tesis_publicacion.png")


for builder in (mind_map,authority_map,traceability_flow,process_map,timeline,gtrm_flow,phase_pipeline,status_map,destination_flow):
    builder()
print(f"created={OUT}")
