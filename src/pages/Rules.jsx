import Rules from '../components/Rules'
export default function RulesPage() {
    return (
        <div style={container}>
            <Rules />
        </div>
    )
}

const container = {
    position: "relative",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
}