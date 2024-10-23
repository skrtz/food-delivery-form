export const getRenderCount = () => {
    let count = 0;

    return () => {
        count++;
        return <div>Render count: {count / 2}</div> // divide by 2 to get the actual render count in strict mode
    };
}
