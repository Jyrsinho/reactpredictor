const TeamList = ({ teams, onDragStart, onDragOver, onDrop, onDragLeave}) => {

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
                        <tr className={"dropzone"} onDragOver={(event )=> onDragOver(event)} style={rowColor} key={team.name}>
                            <td className={"dropzone"}>{index + 1}</td>
                            <td className={"dropzone something"}
                                onDragStart={event => onDragStart(event)}
                                onDrop={(event )=> onDrop(event)}
                                onDragLeave={(event )=> onDragLeave(event)}
                                draggable={"true"}
                                style={teamCellStyle}>{team.name}</td>
                        </tr>
                    );
                })}
            </tbody>
            </table>
        </div>
    )
}
export default TeamList