import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedStudent } from "@/Redux/studentSlice";
import { fetchTodaysEnrollments } from "@/Redux/LatestStudents";
import DateComponent from "./DateComponent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DeleteStudentButton from "./DeleteStudent";
import Pagination from "./Pagination";
import { formatDate } from "../../Utils/formatDate";

const LatestStudents = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { latestEnrollStudents, loading, currentPage, totalPages, error } = useSelector(
        (store) => store.latestStudents
    );


    useEffect(() => {
        dispatch(fetchTodaysEnrollments({ page: currentPage, limit: 10 }));
    }, [dispatch, currentPage]);

    const onRowClick = (student) => {
        dispatch(setSelectedStudent(student));
        navigate(`/admin/student/${student._id}`);
    };


    return (
        <div>
            {/* Header */}
            <div className="p-5">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg lg:text-2xl text-gray-600 font-bold">
                        Today's Enrollment
                    </h1>
                    <DateComponent />
                </div>
            </div>

            {/* Table */}
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
                                <TableCell colSpan={6} className="text-center text-gray-500 py-5">
                                    Loading...
                                </TableCell>
                            </TableRow>
                        ) : latestEnrollStudents?.length > 0 ? (
                            latestEnrollStudents.map((student, index) => (
                                <TableRow
                                    key={student?._id}
                                    className="pointer"
                                    onClick={() => onRowClick(student)}
                                >
                                    <TableCell>
                                        {(currentPage - 1) * 10 + index + 1}
                                    </TableCell>
                                    <TableCell className="font-medium">{student?.fullName}</TableCell>
                                    <TableCell>{student?.phone}</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {student?.pickupLocation}
                                    </TableCell>
                                    <TableCell className="hidden lg:table-cell">
                                        {formatDate(student?.pickupDate)}
                                    </TableCell>
                                    <TableCell className="hidden lg:table-cell">
                                        {student?.schoolName}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        <DeleteStudentButton studentId={student?._id} />
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

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-4 flex justify-center">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page) =>
                            dispatch(fetchTodaysEnrollments({ page, limit: 10 }))
                        }
                    />
                </div>
            )}
        </div>
    );
};

export default LatestStudents;
