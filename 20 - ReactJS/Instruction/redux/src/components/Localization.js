import React from "react";
import { Dropdown, DropdownToggle } from "react-bootstrap";
import { languages } from "../utils/languages/lang";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../store/language/languageSlice";

const Localization = () => {
    const dispatch = useDispatch();
    const language = useSelector((state) => state.language);

    const handleSelect = (event) => {
        dispatch(changeLanguage(event));
    };

    const localeLang = require(`../utils/languages/${language.value}.json`);

    return (
        <Dropdown className="my-5" onSelect={handleSelect}>
            <DropdownToggle>{localeLang.trivialInfo.language}</DropdownToggle>
            <Dropdown.Menu>
                {languages.map((language) => (
                    <Dropdown.Item
                        key={language.value}
                        eventKey={language.value}>
                        {language.name}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Localization;
