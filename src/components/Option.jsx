export default function Option({optionId, active, onClick, children}){
    return <div>
        <div className={`option ${active ? 'active': ''}`} onClick={() => onClick(optionId)}>{children}</div>
    </div>
}