import React from "react";
import { useParams } from "react-router-dom";

export const EditLog = () => {
	const { id } = useParams();
	return <div>Coffee log id: {id}</div>;
};
