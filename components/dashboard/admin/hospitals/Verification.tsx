"use client";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const hospitalsData = [
  {
    image: "/assets/icons/drreach-logo-icon.svg",
    name: "Lions Eyecare Speciality Hospital",
    email: "lions.eyecare@example.com",
    hospitalID: "H00001",
    specialty: "Ophthalmology",
    status: "Pending",
    address: "123 Eye Care Lane, Vision City, VC 12345",
    phone: "9876543210",
    about: "Specialized eye care hospital",
    operatingHours: "24/7",
    facilities: ["Emergency Care", "Outpatient Services", "Inpatient Services"],
    registrationNumber: "REG123456",
    licenseUrl: "/path/to/hospital/license.jpg",
  },
  // ... Add more hospital data as needed
];

type HospitalType = (typeof hospitalsData)[0];

const Verification: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<HospitalType | null>(null);
  const [isPrintPreviewOpen, setIsPrintPreviewOpen] = useState(false);
  const printPreviewRef = useRef<HTMLDivElement>(null);

  const openModal = (hospital: HospitalType) => {
    setSelectedHospital(hospital);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHospital(null);
  };

  const openPrintPreview = () => {
    setIsPrintPreviewOpen(true);
  };

  const closePrintPreview = () => {
    setIsPrintPreviewOpen(false);
  };

  const handlePrint = () => {
    if (printPreviewRef.current) {
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.write(printPreviewRef.current.innerHTML);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
        closePrintPreview();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <main>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Hospital Verification</CardTitle>
            <CardDescription>Check hospital's application status</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>
                A list of recent hospital applications for verification request
              </TableCaption>
              <TableHeader className="bg-[rgba(55,65,81,0.3)]">
                <TableRow>
                  <TableHead className="text-black text-base">Name</TableHead>
                  <TableHead className="text-black text-base">
                    Specialty
                  </TableHead>
                  <TableHead className="text-black text-base">
                    Documents
                  </TableHead>
                  <TableHead className="text-black text-base">Status</TableHead>
                  <TableHead className="text-black text-base">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {hospitalsData.map((hospital) => (
                  <TableRow key={hospital.hospitalID}>
                    <TableCell>
                      <div className="flex gap-4 items-center">
                        <img
                          src={hospital.image}
                          alt={hospital.name}
                          className="rounded-full border-[#3ebdec] border-2"
                          width={80}
                          height={80}
                        />
                        <div className="flex flex-col">
                          <h1 className="text-black text-xl">{hospital.name}</h1>
                          <p>ID: {hospital.hospitalID}</p>
                          <p>{hospital.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-base">
                      {hospital.specialty}
                    </TableCell>
                    <TableCell className="text-lg text-blue-500 hover:underline cursor-pointer">
                      <span onClick={() => openModal(hospital)}>
                        View Documents
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant={"destructive"} className="text-base">
                        {hospital.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-4">
                        <Button className="bg-green-600">Approve</Button>
                        <Button variant={"destructive"}>Reject</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      {isModalOpen && selectedHospital && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <span
              className="close text-2xl font-bold cursor-pointer float-right"
              onClick={closeModal}>
              &times;
            </span>
            <h2 className="text-2xl font-bold mb-4">
              Hospital Application Form
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img
                  src={selectedHospital.image}
                  alt={`Logo of ${selectedHospital.name}`}
                  className="w-32 h-32 object-cover mb-2"
                />
                <p>
                  <strong>Name:</strong> {selectedHospital.name}
                </p>
                <p>
                  <strong>Email:</strong> {selectedHospital.email}
                </p>
                <p>
                  <strong>Phone Number:</strong> {selectedHospital.phone}
                </p>
                <p>
                  <strong>Address:</strong> {selectedHospital.address}
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">About</h3>
                <p>{selectedHospital.about}</p>
                <h3 className="font-bold mt-4 mb-2">Operating Hours</h3>
                <p>{selectedHospital.operatingHours}</p>
                <h3 className="font-bold mt-4 mb-2">Specialty</h3>
                <p>{selectedHospital.specialty}</p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-bold mb-2">Facilities</h3>
              <ul>
                {selectedHospital.facilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="font-bold mb-2">Registration Details</h3>
              <p>
                <strong>Registration Number:</strong> {selectedHospital.registrationNumber}
              </p>
            </div>
            <div className="mt-4">
              <h3 className="font-bold mb-2">Documents for Verification</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Hospital License</p>
                  <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse"></div>
                </div>
              </div>
            </div>
            <Button
              onClick={openPrintPreview}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              View Print Preview
            </Button>
          </div>
        </div>
      )}
      {/* Print Preview Modal */}
      {isPrintPreviewOpen && selectedHospital && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={printPreviewRef}
            className="bg-white text-black p-8 w-[210mm] h-[80vh] overflow-y-auto rounded-xl border-8 border-blue-400 shadow-2xl">
            <div className="border-4 border-blue-400 p-4 h-full overflow-y-auto">
              <span
                className="close text-black cursor-pointer float-right no-print"
                onClick={closePrintPreview}>
                &times;
              </span>
              <header className="mb-6 text-center">
                <Image
                  src="/logos/DR.png"
                  height={150}
                  width={150}
                  alt="logo"
                  className={`mx-auto mb-2`}
                />
                <p className="text-sm">CIN No: XXXXXXXXXXXXXXXXX</p>
                <p className="text-sm">
                  123 Health Avenue, Medical District, City - 110001
                </p>
                <h1 className="text-2xl font-bold mt-4">
                  Hospital Application Form
                </h1>
                <p className="text-sm">Application Reference No.: APP123456</p>
                <p className="text-sm">Date of Apply: 01/05/2023</p>
              </header>

              {/* ... Add sections for hospital details similar to the doctor's form ... */}

              <footer className="text-center text-sm mt-8">
                <p>Dr. Reach - Healthunity Solutions Pvt Ltd</p>
                <p>123 Health Avenue, Medical District, City - 110001</p>
                <p>
                  &copy; Copyrights reserved, 2024, Terms & Conditions apply
                </p>
              </footer>

              <div className="mt-4 no-print">
                <Button
                  onClick={handlePrint}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Print
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Verification;
