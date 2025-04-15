import { InitialUserInterface } from "@/interfaces/InitialUserInterface";
import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState: InitialUserInterface = {
  specializatins: [],

  dob: new Date(),
  loading: false,
  activeDoctorTab: 0,
  activePatientsProfileTab: 0,
  currentlySelectedSheduleIndex: {
    show: false,
    day: "mon",
  },

  shedules: [],
  availableForDeskShedule: [],
  appointMentDetails: {
    date: "",
    doctorId: "",
    time: "",
  },

  apptFor: "ME",

  currentLocation: {
    lat: 0.0,
    long: 0.0,
  },

  doctorDashTabTodayUpcoming: 0,
  doctorList: [],
  findingDoctor: false,
  HomeVisitDoctorList: [],
  VideoDoctorList: [],
  addMedicalRecordDialog: false,
};
const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    setSpecializations: (state, action) => {
      state.specializatins = action.payload;
    },

    addSpecialization: (state, action) => {
      state.specializatins.push(action.payload);
    },

    removeSpecialization: (state, action) => {
      const { index } = action.payload;
      state.specializatins.splice(index, 1);
    },

    setDob: (state, action) => {
      state.dob = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setActiveDotcorTab: (state, action) => {
      state.activeDoctorTab = action.payload;
    },
    setActivePatientsProfileTab: (state, action) => {
      state.activePatientsProfileTab = action.payload;
    },

    setCurrentSheduleIndex: (state, action) => {
      state.currentlySelectedSheduleIndex = action.payload;
    },

    removeShedule: (state, action) => {
      const { index, mode } = action.payload;
      if (mode === "VIDEO" || mode === "HOME") {
        state.shedules.splice(index, 1);
      } else {
        state.availableForDeskShedule.splice(index, 1);
      }
    },

    addShedule: (state, action) => {
      const { shedules, mode } = action.payload;
      if (mode === "VIDEO" || mode === "HOME") {
        state.shedules.push(shedules);
      } else {
        state.availableForDeskShedule.push(shedules);
      }
    },

    updateShedule: (state, action) => {
      const { shedules, index, mode } = action.payload;
      if (mode === "VIDEO" || mode === "HOME") {
        state.shedules[index] = shedules;
      } else {
        state.availableForDeskShedule[index] = shedules;
      }
    },

    setShedule: (state, action) => {
      const { mode, shedules } = action.payload;
      if (mode === "VIDEO" || mode === "HOME") {
        state.shedules = shedules;
      } else {
        state.availableForDeskShedule = shedules;
      }
    },

    setAppointmentDetails: (state, action) => {
      state.appointMentDetails = action.payload;
    },

    setAptFor: (state, action) => {
      state.apptFor = action.payload;
    },

    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload;
    },

    setDoctorDashTabTodayUpcoming: (state, action) => {
      state.doctorDashTabTodayUpcoming = action.payload;
    },

    setDoctorList: (state, action) => {
      state.doctorList = action.payload;
    },

    setFindingDoctor: (state, action) => {
      state.findingDoctor = action.payload;
    },

    setHomeVisitDoctorList: (state, action) => {
      state.HomeVisitDoctorList = action.payload;
    },
    setVideoDoctorList: (state, action) => {
      state.VideoDoctorList = action.payload;
    },

    setAddMedicalRecordDialog: (state, action) => {
      state.addMedicalRecordDialog = action.payload;
    },
  },
});

export const {
  addSpecialization,
  removeSpecialization,
  setSpecializations,
  setDob,
  setLoading,
  setActiveDotcorTab,
  setActivePatientsProfileTab,
  removeShedule,
  setCurrentSheduleIndex,
  updateShedule,
  setShedule,
  addShedule,
  setAppointmentDetails,
  setAptFor,
  setCurrentLocation,
  setDoctorDashTabTodayUpcoming,
  setDoctorList,
  setFindingDoctor,
  setHomeVisitDoctorList,
  setVideoDoctorList,
  setAddMedicalRecordDialog,
} = UserSlice.actions;

export default UserSlice.reducer;
