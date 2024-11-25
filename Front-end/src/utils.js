
export const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return isNaN(date)
      ? "Invalid Date"
      : date.toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
  };
  
  export const formatSolde = (solde) => {
    return solde ? solde.toFixed(2) : "0.00";
  };
  