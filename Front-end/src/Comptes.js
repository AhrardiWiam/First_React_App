import React, { useState, useEffect } from "react";
import { fetchBankAccounts, updateBankAccount, createCompte, deleteBankAccount } from "./api";
import AccountTable from "./AccountTable.js";
import AccountForm from "./AccountForm";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export function Comptes() {
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateAccount, setUpdateAccount] = useState(null);
  const [isCreateOpen, setCreateOpen] = useState(false);
  const [format, setFormat] = useState("json"); 


  const fetchAccounts = async () => {
    try {
      setIsLoading(true);
      const data = await fetchBankAccounts(format); // format pris depuis l'état
      setAccounts(data);
    } catch (err) {
      setError("Failed to fetch bank accounts. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    fetchAccounts();
  }, [format]);
  
  const handleDelete = async (id) => {
    try {
      await deleteBankAccount(id, format); 
      fetchAccounts();
    } catch (err) {
      setError("Failed to delete the account. Please try again.");
    }
  };
  

  const handleUpdate = async (accountData) => {
    try {
      await updateBankAccount(accountData.id, accountData, format); 
      setUpdateAccount(null);
      fetchAccounts();
    } catch (err) {
      setError("Failed to update the account. Please try again.");
    }
  };
  

  const handleCreate = async (newAccount) => {
    try {
      await createCompte(newAccount);
      setCreateOpen(false);
      fetchAccounts();
    } catch (err) {
      setError("Failed to create the account. Please try again.");
    }
  };

  return (
    <div className="container my-4 dark-theme">
      <header className="text-center mb-4">
        <h1 className="text-cyan">Listes des Comptes Bancaires</h1>
        <p className="text-muted">Gérez vos comptes bancaires avec simplicité.</p>
        <Form.Select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="mb-3"
        >
          <option value="json">JSON</option>
          <option value="xml">XML</option>
        </Form.Select>
        <Button onClick={() => setCreateOpen(true)} variant="outline-light">
          <i className="fas fa-plus-circle"></i> Ajouter un Compte
        </Button>
      </header>

      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <AccountTable accounts={accounts} onDelete={handleDelete} onEdit={setUpdateAccount} />
      )}

      {error && <p className="text-danger">{error}</p>}

      <Modal show={isCreateOpen} onHide={() => setCreateOpen(false)}>
        <AccountForm onSubmit={handleCreate} onCancel={() => setCreateOpen(false)} />
      </Modal>

      {updateAccount && (
        <Modal show onHide={() => setUpdateAccount(null)}>
          <AccountForm
            account={updateAccount}
            onSubmit={handleUpdate}
            onCancel={() => setUpdateAccount(null)}
          />
        </Modal>
      )}
    </div>
  );
}
