import { Dayjs } from "dayjs";

export interface SheduleInterface {
  mode: string;
  start: string;
  end: string;
}

interface FindDoctorList {
  specializations: string[];

  id: string;
  fee: number;
  mode: string;
  isAvailableForDesk: boolean;

  user: {
    id: string;

    Fname: string;
    Lname: string;
    email: string;
    profilePic: string;
    contact: string;
    username: string;
    address: {
      address: string;
      city: string;
      state: string;
      country: string;
      pincode: string;
    };
  };
}

export interface InitialUserInterface {
  specializatins: string[];
  dob: Date;
  loading: boolean;
  activeDoctorTab: number;
  activePatientsProfileTab: number;

  shedules: string[];
  availableForDeskShedule: string[];

  currentlySelectedSheduleIndex: {
    show: boolean;
    day: string;
  };

  appointMentDetails: {
    doctorId: string;
    date: string;
    time: string;
  };

  apptFor: "ME" | "OTHER";

  currentLocation: {
    lat: number;
    long: number;
  };

  doctorList: FindDoctorList[];
  HomeVisitDoctorList: FindDoctorList[];
  VideoDoctorList: FindDoctorList[];

  findingDoctor: boolean;

  doctorDashTabTodayUpcoming: number;

  addMedicalRecordDialog: boolean;
}
