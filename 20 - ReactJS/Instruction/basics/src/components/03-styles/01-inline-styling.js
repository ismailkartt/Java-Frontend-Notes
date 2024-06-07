function InlineStyling() {
    return (
        <div style={{
            border: "1px solid red",
            padding: '1rem',
            borderRadius: '0.5rem',
            textAlign: 'center',
            margin: '1rem 0'
        }}>
            <h2 style={{ margin: 0, color: "navy" }}>REACT INLINE STYLING</h2>
            <p style={{ fontStyle: 'italic', color: 'rgba(155, 135, 120, 0.7)' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum nihil aperiam porro voluptatibus laboriosam harum ab minus, ut cumque itaque nostrum at dignissimos corrupti neque eveniet deserunt sunt eius!
            </p>
        </div>
    )
}

export default InlineStyling;