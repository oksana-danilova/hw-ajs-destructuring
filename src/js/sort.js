export default function orderByProps(obj, order) {
    const resultData = [];
    const propsOrder = [];

    for (const key in obj) {
        if (order.includes(key)) {
            const index = order.indexOf(key);
            propsOrder.splice(index, 0, {
                key, value: obj[key]
            });
        } else {
            resultData.push({
                key, value: obj[key]
            });
        }
    }
    resultData.sort((a, b) => (a.key > b.key ? 1 : -1));
    return [
        ...propsOrder, ...resultData
    ];
}
