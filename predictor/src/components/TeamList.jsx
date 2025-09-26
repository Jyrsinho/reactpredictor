const TeamList = ({ teams, onDragStart}) => {

    const tableStyle = {
        border: '1px solid #ddd',
    }

    const teamCellStyle = {
        border: '1px solid #ddd',
        cursor: 'move',
    }

    return (
        <div className="teams">
            <table style={tableStyle}>
                <tbody>
                {teams.map((team, index) => {
                    const rowColor = {
                        backgroundColor: `rgba(${255/20*index}, ${255 - 255/20 *index}, 0, 100%)`,
                        border: '1px solid #ddd',
                    }
                    return (
                        <tr style={rowColor} key={team.name}>
                            <td>{index + 1}</td>
                            <td onDragStart={event => onDragStart} draggable={"true"} style={teamCellStyle}>{team.name}</td>
                        </tr>
                    );
                })}
            </tbody>
            </table>
        </div>
    )
}
export default TeamList