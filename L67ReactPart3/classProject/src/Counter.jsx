export default function counter() {
    let count = 0;

        function incCount() {
            count += 1;
            console.log(count);
        }
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={incCount}>Increment</button>
            </div>

        
    );
}
