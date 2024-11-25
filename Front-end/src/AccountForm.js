import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const AccountForm = ({ account = {}, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    dateCreation: account.dateCreation || "",
    solde: account.solde || "",
    type: account.type || "Courant",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...account, ...formData });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#121212", 
        color: "#00FFFF", 
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Form.Group controlId="dateCreation">
        <Form.Label>Date de Création</Form.Label>
        <InputGroup>
          <InputGroup.Text>
            <i className="fas fa-calendar-alt"></i>
          </InputGroup.Text>
          <Form.Control
            type="date"
            value={formData.dateCreation}
            onChange={(e) =>
              setFormData({ ...formData, dateCreation: e.target.value })
            }
            style={{ backgroundColor: "#1e1e1e", color: "#FFFFFF" }}
          />
        </InputGroup>
      </Form.Group>

      <Form.Group controlId="solde">
        <Form.Label>Solde</Form.Label>
        <InputGroup>
          <InputGroup.Text>
            <i className="fas fa-dollar-sign"></i>
          </InputGroup.Text>
          <Form.Control
            type="number"
            value={formData.solde}
            onChange={(e) =>
              setFormData({ ...formData, solde: parseFloat(e.target.value) })
            }
            style={{ backgroundColor: "#1e1e1e", color: "#FFFFFF" }}
          />
        </InputGroup>
      </Form.Group>

      <Form.Group controlId="type">
        <Form.Label>Type</Form.Label>
        <InputGroup>
          <InputGroup.Text>
            <i className="fas fa-university"></i>
          </InputGroup.Text>
          <Form.Control
            as="select"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            style={{ backgroundColor: "#1e1e1e", color: "#FFFFFF" }}
          >
            <option value="Courant">Courant</option>
            <option value="Epargne">Epargne</option>
          </Form.Control>
        </InputGroup>
      </Form.Group>

      <div className="text-right">
        <Button
          type="submit"
          style={{
            backgroundColor: "#00FFFF",
            color: "#000",
            marginRight: "10px", 
          }}
        >
          <i className="fas fa-save"></i> Sauvegarder
        </Button>
        <Button
          onClick={onCancel}
          style={{ backgroundColor: "#555555", color: "#FFFFFF" }}
        >
          <i className="fas fa-times"></i> Annuler
        </Button>
      </div>
    </Form>
  );
};

export default AccountForm;
