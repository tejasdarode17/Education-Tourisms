import DateComponent from "./DateComponent"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllStudents, setPage, setSelectedStudent } from "@/Redux/studentSlice"
import DeleteStudentButton from "./DeleteStudent"
import { useNavigate } from "react-router-dom"
import { formatDate } from "../../Utils/formatDate"
import Pagination from "./Pagination"
import { useEffect } from "react"


const Students = () => {
    const { students, currentPage, totalPages, loading } = useSelector(
        (store) => store.students
    );
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllStudents({ page: currentPage }));
    }, [dispatch, currentPage]);

    const onRowClick = (student) => {
        dispatch(setSelectedStudent(student));
        navigate(`/admin/student/${student._id}`);
    };

    return (
        <div>
            <div className="p-5">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg lg:text-2xl text-gray-600 font-bold">Students</h1>
                    <DateComponent />
                </div>
            </div>

            <div className="lg:rounded-xl border shadow-sm overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]">#</TableHead>
                            <TableHead>Full Name</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead className="hidden md:table-cell">Pickup Location</TableHead>
                            <TableHead className="hidden lg:table-cell">Pickup Date</TableHead>
                            <TableHead className="hidden lg:table-cell">School</TableHead>
                            <TableHead className="hidden md:table-cell">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center py-5">
                                    Loading...
                                </TableCell>
                            </TableRow>
                        ) : students.length > 0 ? (
                            students.map((student, index) => (
                                <TableRow
                                    className="pointer"
                                    key={student._id}
                                    onClick={() => onRowClick(student)}
                                >
                                    <TableCell>{(currentPage - 1) * 20 + index + 1}</TableCell>
                                    <TableCell className="font-medium">{student.fullName}</TableCell>
                                    <TableCell>{student.phone}</TableCell>
                                    <TableCell className="hidden md:table-cell">{student.pickupLocation}</TableCell>
                                    <TableCell className="hidden lg:table-cell">{formatDate(student.pickupDate)}</TableCell>
                                    <TableCell className="hidden lg:table-cell">{student.schoolName}</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        <DeleteStudentButton studentId={student._id} />
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center text-gray-500 py-5">
                                    No students found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination Footer */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => dispatch(setPage(page))}
            />
        </div>
    );
}

export default Students

