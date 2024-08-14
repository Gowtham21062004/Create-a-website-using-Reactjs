
import Footer from "./Footer";

function Content(props){
    return(
        <>
        <table className="table">
            <tr>
                <th>S.NO</th>
                <th>Fname</th>
                <th>DEPT</th>
                <th>COLLEGE</th>
                <th>PASSED OUT YEAR</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Ram</td>
                <td>AIML</td>
                <td>HICET</td>
                <td>2025</td>
            </tr>
            <tr>
                <td>2</td>
                <td>kumar</td>
                <td>MCT</td>
                <td>HICET</td>
                <td>2025</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Ashok</td>
                <td>MECH</td>
                <td>HICET</td>
                <td>2025</td>
            </tr>
            <tr>
                <td>4</td>
                <td>samu</td>
                <td>AUTO</td>
                <td>HICET</td>
                <td>2025</td>
            </tr>
        </table><br></br><br></br>
        <form>
            <label>Fname</label>
            <input type="" className="input"></input>
            <label>Lname</label>
            <input type="" className="input"></input>
            <label>Password</label>
            <input type="" className="input"></input>
            <label>Email</label>
            <input type="" className="input"></input><br></br>
            <button >Submit</button>
        </form>
        {/* <Footer name="CSE" /> */}
        <h4>i am {props.name}</h4>
        </>
    );
}
export default Content;