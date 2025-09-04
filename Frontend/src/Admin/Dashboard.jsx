import { Link } from "react-router-dom"
import DateComponent from "./DateComponent"
import { useSelector } from "react-redux"


const Dashboard = () => {

    const { students, allTotal } = useSelector((store) => store.students)
    const { todaysTotal } = useSelector((store) => store.latestStudents)

    const uncalledStudents = students.filter(stu => !stu.called)

    return (
        <div>
            <div className="p-5">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg lg:text-2xl text-gray-600 font-bold">Dashboard</h1>
                    <DateComponent />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                <Link to="/admin/students">
                    <div className="p-4 bg-white shadow rounded-xl">
                        <h2 className="text-gray-500 text-sm">Total Students</h2>
                        <p className="text-2xl font-bold">{allTotal}</p>
                    </div>
                </Link>
                <Link to='/admin/today'>
                    <div className="p-4 bg-white shadow rounded-xl">
                        <h2 className="text-gray-500 text-sm">Today's Enrollments</h2>
                        <p className="text-2xl font-bold"> {todaysTotal}</p>
                    </div>
                </Link>
                {/* <Link>
                    <div className="p-4 bg-white shadow rounded-xl">
                        <h2 className="text-gray-500 text-sm">Uncalled Students</h2>
                        <p className="text-2xl font-bold">{uncalledStudents.length}</p>
                    </div>
                </Link> */}
            </div>

        </div>
    )
}


export default Dashboard


