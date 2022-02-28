import React, { useState } from "react";

//REACSTRAPP - CSS
import { Form, FormGroup, Label, Input, Button, CardText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

//FIREBASE
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";

const initialState = {
  email: "",
  nombre: "",
  select: "",
  comentarios: "",
};

const Contact = () => {
  const [values, setValues] = useState(initialState);

  const [contactId, setContactId] = useState("");

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "contactos"), {
      values,
    });

    setContactId(docRef.id);
    setValues(initialState);
  };

  return (
    <div className="contacto">
      <Form onSubmit={onSubmit}>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2" for="Email">
            Email
          </Label>

          <Input
            id="Email"
            name="email"
            value={values.email}
            onChange={onChange}
            placeholder="Ingrese su email"
            type="email"
          />

          <Label for="Nombre">Nombre y Apellido</Label>
          <Input
            id="Nombre"
            name="nombre"
            value={values.nombre}
            onChange={onChange}
            placeholder="Nombre Completo"
          />

          <Label for="select">Seleccione Empresa</Label>
          <Input
            id="select"
            name="select"
            value={values.select}
            onChange={onChange}
            type="select"
          >
            <option></option>
            <option>Tarjeta Naranja</option>
            <option>Cencosud</option>
            <option>Vivus</option>
          </Input>

          <Label for="Comentarios">Comentarios</Label>
          <Input
            id="Comentarios"
            name="comentarios"
            value={values.comentarios}
            onChange={onChange}
            type="textarea"
          />
        </FormGroup>

        <Button>Enviar</Button>
        {contactId !== "" ? (
          <CardText>
            Tu ID de contacto es: {contactId}. Pronto te escribimos!!
          </CardText>
        ) : (
          ""
        )}
      </Form>
    </div>
  );
};

export default Contact;
