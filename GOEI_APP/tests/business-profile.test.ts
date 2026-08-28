import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { businessProfileSchema } from "../src/domain/business-profile";
import { demoEstablishments } from "../src/data/demo";

test("los tres casos demostrativos incluyen una ficha de negocio válida",()=>{
  assert.equal(demoEstablishments.length,3);
  for(const business of demoEstablishments) assert.equal(businessProfileSchema.safeParse(business.profile).success,true);
});

test("una ficha exige canales, desafíos, capacidad y equipo coherentes",()=>{
  const profile={...demoEstablishments[0].profile,channels:[],seats:0};
  assert.equal(businessProfileSchema.safeParse(profile).success,false);
});

test("la migración limita el perfil a establecimientos sintéticos",()=>{
  const sql=readFileSync(new URL("../supabase/migrations/202608280007_synthetic_business_profiles.sql",import.meta.url),"utf8");
  assert.match(sql,/is_synthetic = true/);
  assert.match(sql,/create_profiled_synthetic_establishment/);
  assert.match(sql,/profiled/);
});
