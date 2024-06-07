import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Content = () => {
    const language = useSelector((state) => state.language);

    const localeFile = require(`../utils/languages/${language.value}.json`);

    return (
        <Container className="mt-5 text-center">
            <h1>{localeFile.trivialInfo.welcome}</h1>
            <h2>{localeFile.trivialInfo.aboutUs}</h2>
            <h3>{localeFile.trivialInfo.contact}</h3>
            <h4>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
                eligendi assumenda ab ad neque, quaerat odit non blanditiis
                porro iusto culpa sapiente dignissimos asperiores! Id quisquam
                eligendi veritatis! Dicta, facere.
            </h4>
        </Container>
    );
};

export default Content;
