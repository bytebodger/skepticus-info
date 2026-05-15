interface Props {
    text: string,
}

export const TargetVerseRow = ({text}: Props) => {
    return <>
        <tr>
            <td style={{ minWidth: 100 }}/>
            <td/>
            <td style={{
                color: 'paleturquoise',
                textAlign: 'left',
                width: '100%',
                fontWeight: 'bold',
                fontSize: '350%',
                padding: 10,
            }}>
                {text}
            </td>
        </tr>
    </>
}
