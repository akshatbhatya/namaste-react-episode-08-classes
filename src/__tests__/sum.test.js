import { test, expect } from "@jest/globals";
import { Sum } from "../testcase/Sum";
Sum

test("add two number",()=>{

    let result=Sum(12,12);
    expect(result).toBe(24)
   

});