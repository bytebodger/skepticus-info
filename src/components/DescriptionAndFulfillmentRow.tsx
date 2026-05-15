interface Props {
    description: string,
    fulfillment: string,
}

export const DescriptionAndFulfillmentRow = ({description, fulfillment}: Props) => {
    return <>
        <tr>
            <td style={{ minWidth: 100 }}/>
            <td/>
            <td style={{
                color: 'paleturquoise',
                fontSize: '200%',
                fontWeight: 'bold',
                paddingLeft: 20,
                paddingTop: 0,
                textAlign: 'left',
                width: '100%',
            }}>
                {description}
                <br/>
                {fulfillment}
            </td>
        </tr>
    </>
}
