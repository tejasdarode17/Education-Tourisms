import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import DeleteStudentButton from "./DeleteStudent";
import { formatDate } from "../../Utils/formatDate";

const SelectedStudent = () => {
    const { selectedStudent, allStudents } = useSelector((store) => store.students);

    if (!selectedStudent || !selectedStudent._id) {
        return (
            <div className="p-4 text-gray-500 text-center">
                Select a student from the table to view details
            </div>
        );
    }

    return (
        <Card className="w-full lg:w-[400px] shadow-md border">
            <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-700">
                    {selectedStudent.fullName}
                </CardTitle>
                <p className="text-sm text-gray-500">{selectedStudent.schoolName}</p>
                <p className="text-xs text-gray-400">
                    Registred on {formatDate(selectedStudent.createdAt)}
                </p>
            </CardHeader>

            <CardContent className="space-y-4">
                <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{selectedStudent.phone}</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{selectedStudent.email}</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">Pickup Location</p>
                    <p className="font-medium">{selectedStudent.pickupLocation}</p>
                </div>


                <div>
                    <p className="text-sm text-gray-500">Pickup date  </p>
                    <p className="font-medium">{formatDate(selectedStudent.pickupDate)}</p>
                </div>


                {/* Coachings */}
                <div>
                    <p className="text-sm text-gray-500">Coachings</p>
                    {Array.isArray(selectedStudent.coachings) && selectedStudent.coachings.length > 0 ? (
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            {selectedStudent.coachings.map((coaching, idx) => (
                                <li key={idx}>{coaching}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-gray-400">No coachings assigned</p>
                    )}
                </div>

                {/* Toggle Called/Uncalled */}
                <div className="flex items-center justify-between">
                    <span className="text-sm">Called</span>
                    <Switch defaultChecked={selectedStudent.called} />
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-3">
                    <Button className="flex-1" variant="destructive">
                        <DeleteStudentButton studentId={selectedStudent._id} allStudents={allStudents} />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default SelectedStudent;



// called uncalled to be made
// pagination   