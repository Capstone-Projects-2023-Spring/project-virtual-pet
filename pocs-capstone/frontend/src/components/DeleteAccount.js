import React, { useState, useEffect, useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import AvatarContext from "../context/AvatarContext";

function DeleteAccount() {
    const contextHandler = useContext(AvatarContext);
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();

    // const petName = axiosPrivate.get("/avatar/").then(res => res.data.name).catch(() => "your pet");

    const handleDelete = async () => {
        if (!window.confirm("You're really going to abandon your pet?")) {
            return;
        }

        try {
            const res = await axiosPrivate.delete("/delete/");

            if (res.status === 204) {
                localStorage.removeItem("refresh");
                localStorage.removeItem("persist");

                // Redirect to registration page
                navigate("/register");
            }
        } catch (err) {
        console.error("Delete error:", err);
        alert("Could not delete account.");
        }
    };

    const handleReturn = () => {
        navigate("/");
    };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px", marginBottom: "50px" }}>
        <Card style={{ padding: "20px", width: "200px" }}>
            <h3>Delete Account</h3>
            <p>This action is permanent and cannot be undone.</p>
            <Button variant="danger" onClick={handleDelete}>
            Delete My Account
            </Button>
        </Card>
        <Card style={{ padding: "20px", width: "200px", marginLeft: "20px" }}>
            <h3>Return</h3>
            <p>Decided not to delete your account?</p>
            <Button variant="light" onClick={handleReturn}>
            Return to your pet
            </Button>
        </Card>
    </div>
  );
}

export default DeleteAccount;