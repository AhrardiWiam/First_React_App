import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8082",
});

const getHeaders = (format) => ({
  "Accept": format === "xml" ? "application/xml" : "application/json",
  "Content-Type": "application/json",
});

export const fetchBankAccounts = async (format = "json") => {
  const response = await api.get("/banque/comptes", {
    headers: getHeaders(format),
  });

  return format === "xml" ? parseXML(response.data) : response.data;
};

export const createCompte = async (accountData, format = "json") => {
  try {
    const response = await api.post("/banque/comptes", accountData, {
      headers: getHeaders(format),
    });
    return format === "xml" ? parseXML(response.data) : response.data;
  } catch (err) {
    throw new Error("Failed to create the account. Please try again later.");
  }
};

export const updateBankAccount = async (id, compteDetails, format = "json") => {
  try {
    const response = await api.put(`/banque/comptes/${id}`, compteDetails, {
      headers: getHeaders(format),
    });
    return format === "xml" ? parseXML(response.data) : response.data;
  } catch (error) {
    console.error("Error updating account:", error.message);
    throw error;
  }
};

export const deleteBankAccount = async (id, format = "json") => {
  try {
    const response = await api.delete(`/banque/comptes/${id}`, {
      headers: getHeaders(format),
    });
    return response.status; 
  } catch (error) {
    console.error("Error deleting account:", error.message);
    throw error;
  }
};

// Méthode pour parser le XML 
const parseXML = (xmlString) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  const accounts = [];

  // Parcourir chaque noeud "item"
  const itemNodes = xmlDoc.getElementsByTagName("item");
  for (let i = 0; i < itemNodes.length; i++) {
    const item = itemNodes[i];
    const account = {};

    // Parcourir chaque enfant de "item"
    for (let j = 0; j < item.children.length; j++) {
      const child = item.children[j];
      account[child.nodeName] = child.textContent; 
    }

    // Convertir des champs 
    account.id = parseInt(account.id, 10);
    account.solde = parseFloat(account.solde);
    accounts.push(account);
  }

  return accounts;
};


