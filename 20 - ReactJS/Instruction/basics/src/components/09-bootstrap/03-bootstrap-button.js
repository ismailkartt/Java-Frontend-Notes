const BootstrapButton = ({ variant, disabled }) => {

    return (
        <button className={`btn ${variant ? `btn-${variant}` : "btn-primary"}`} disabled={disabled}>BootstrapButton</button>
    )
};

export default BootstrapButton;