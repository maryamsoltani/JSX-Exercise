function App() {
    return (
        <div>
            <Tweet
            name = "Mary S"
            username="Maryyy"
            date={new Date().toDateString()}
            messgae="This app will distrupt everything!!"
            />
            <Tweet
            name = "Mj G"
            username="MJJJJ"
            date={new Date().toDateString()}
            messgae="Ilovehashtag"
            />
            <Tweet
            name = "Hana T"
            username="Hanaaa"
            date={new Date().toDateString()}
            messgae="followMe"
            />

        </div>
    );
}