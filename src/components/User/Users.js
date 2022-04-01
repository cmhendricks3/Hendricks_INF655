import React from "react";
import { useParams } from "react-router-dom";
import Card from "../shared/Card";

export default function Users() {
  const params = useParams();
  return (
    <Card>
      <h1>
        Welcome to Task Manager {params.name} your ID is {params.id}
      </h1>
    </Card>
  );
}