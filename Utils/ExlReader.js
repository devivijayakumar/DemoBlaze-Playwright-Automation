
const ExcelJS = require("exceljs");

async function readLoginData() {
    const path="/Users/devivijayakumar/Downloads/credentials.xlsx"
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(path);
  const worksheet = workbook.getWorksheet("Sheet 1");
  const data = [];
  worksheet.eachRow((row) => {

  data.push({
    username: row.getCell(1).value,
    password: row.getCell(2).value
  });

});
  
  return data;
}

 module.exports= {readLoginData};
 
