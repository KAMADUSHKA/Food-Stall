import api from "./interceptor";

export const handleLogin = (formData) => {
  let postData = {
    email: formData.username,
    password: formData.password,
  };
  return api.post("/api/v1/users", postData);
};

export const addCard = (formData) => {
  console.log("form data ia a", formData);
  let postData = new FormData();
  postData.append("image", formData.profile);
  postData.append("cardName", formData.cardName);
  postData.append("cardDetails", formData.cardDetails);

  return api.post("/api/v1/users/createCard", postData);
};

export const cards = () => {
  return api.get("/api/v1/users/cardData");
};


///table data create
export const table = (formData) => {
  console.log(
    "successaaaaaaaaaaaaaaaaaaaa in check 11111111111111111",
    formData
  );
  let postData = new FormData();
  postData.append("service", formData.service);
  postData.append("serverIp", formData.serverIp);
  postData.append("serverParth", formData.serverParth);
  postData.append("discription", formData.discription);
  postData.append("services_serviceName", formData.services_serviceName);
  postData.append("services_serverIP", formData.services_serverIP);
  postData.append("services_serverPath", formData.services_serverPath);
  postData.append(
    "services_relatedCommands",
    formData.services_relatedCommands
  );
  postData.append("scripts_location", formData.scripts_location);
  postData.append("scripts_serverIP", formData.scripts_serverIP);
  postData.append("scripts_uploadFile", formData.scripts_uploadFile);
  postData.append("scripts_discription", formData.scripts_discription);
  postData.append("db_dbName", formData.db_dbName);
  postData.append("db_dbIPServerIP", formData.db_dbIPServerIP);
  postData.append("db_backupLocation", formData.db_backupLocation);
  postData.append("db_discription", formData.db_discription);
  postData.append(
    "documentation_documentTitle",
    formData.documentation_documentTitle
  );
  postData.append(
    "documentation_documentType",
    formData.documentation_documentType
  );
  // postData.append("documentation_fileUpload", formData.documentation_fileUpload);
  postData.append("documentation_fileUpload", formData.profile);
  postData.append(
    "documentation_discription",
    formData.documentation_discription
  );
  postData.append(
    "troubleshootingTips_ServiceName",
    formData.troubleshootingTips_ServiceName
  );
  postData.append(
    "troubleshootingTips_issueDiscription",
    formData.troubleshootingTips_issueDiscription
  );
  postData.append(
    "troubleshootingTips_resolvingProcedure",
    formData.troubleshootingTips_resolvingProcedure
  );
  postData.append(
    "troubleshootingTips_fileUpload",
    formData.profile_TrobleShooting
  );
  postData.append("cardID", formData.cardID);
  postData.append("tableFeeldValueID", formData.tableFeeldValueID);
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa", postData);

  return api.post("/api/v1/users/tableData", postData);
};

///get table data
export const tableDetail = () => {
  return api.get("/api/v1/users/getTableData");
};

///table data delete
export const tableRowDelete = (formData) => {
  console.log("form data is a", formData);
  let postData = {
    tableID: formData,
};
  // postData.append("tableID", formData);
  console.log("post data is a ", postData);

  return api.post("/api/v1/users/tableDataDelete",postData);
};

///update table data
export const tableRowUpdate = (formData) => {
  console.log("Updated form data is :", formData);
  let postData = new FormData();
  postData.append("tableID", formData.tableID);
  postData.append("service", formData.service);
  postData.append("serverIp", formData.serverIp);
  postData.append("serverParth", formData.serverParth);
  postData.append("discription", formData.discription);
  postData.append("services_serviceName", formData.services_serviceName);
  postData.append("services_serverIP", formData.services_serverIP);
  postData.append("services_serverPath", formData.services_serverPath);
  postData.append(
    "services_relatedCommands",
    formData.services_relatedCommands
  );
  postData.append("scripts_location", formData.scripts_location);
  postData.append("scripts_serverIP", formData.scripts_serverIP);
  postData.append("scripts_uploadFile", formData.scripts_uploadFile);
  postData.append("scripts_discription", formData.scripts_discription);
  postData.append("db_dbName", formData.db_dbName);
  postData.append("db_dbIPServerIP", formData.db_dbIPServerIP);
  postData.append("db_backupLocation", formData.db_backupLocation);
  postData.append("db_discription", formData.db_discription);
  postData.append(
    "documentation_documentTitle",
    formData.documentation_documentTitle
  );
  postData.append(
    "documentation_documentType",
    formData.documentation_documentType
  );
  // postData.append("documentation_fileUpload", formData.documentation_fileUpload);
  postData.append("documentation_fileUpload", formData.profile);
  postData.append(
    "documentation_discription",
    formData.documentation_discription
  );
  postData.append(
    "troubleshootingTips_ServiceName",
    formData.troubleshootingTips_ServiceName
  );
  postData.append(
    "troubleshootingTips_issueDiscription",
    formData.troubleshootingTips_issueDiscription
  );
  postData.append(
    "troubleshootingTips_resolvingProcedure",
    formData.troubleshootingTips_resolvingProcedure
  );
  postData.append(
    "troubleshootingTips_fileUpload",
    formData.profile_TrobleShooting
  );
  postData.append("cardID", formData.cardID);
  postData.append("tableFeeldValueID", formData.tableFeeldValueID);

  console.log("Updated post data is a ", postData);

  return api.post("/api/v1/users/TableDataUpdate",postData);
};
