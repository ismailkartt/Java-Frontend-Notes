import styles from "./04-module-styling.module.css";
// import "./04-module-styling.css";

const ModuleStyling = () => {
    // console.log(styles);

    // const newStyles = {
    //     externalModuleStyling: {
    //         color: "blueviolet",
    //         margin: 0,
    //         padding: "1rem",
    //         border: "1px solid blueviolet",
    //         "border-radius": "1.5rem",
    //     },
    //     title: {
    //         color: "orange",
    //         "text-align": "center",
    //     },
    //     "external-styling-module": {
    //         color: "green",
    //         margin: 0,
    //         padding: "1rem",
    //         border: "1px solid green",
    //         "border-radius": "1.5rem",
    //     },
    // }

    // console.log(newStyles.externalModuleStyling)
    // console.log(newStyles["external-styling-module"])
    return (
        <div className={styles.externalModuleStyling}>
            <h2 id={styles.title}>MODULE STYLING</h2>
            <p className={styles["external-styling-module"]}>
                React uygulamalarinda stil olusturmak icin bir diger yontem de modul yontemidir.
            </p>
        </div>
    )
};

export default ModuleStyling;