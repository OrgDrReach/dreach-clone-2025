const ProfileManagement = () => {
	return (
		<div className="bg-[#ffffff] dark:bg-slate-800 border-2 border-gray-300 dark:border-gray-600   shadow-md rounded-lg p-6 mb-8">
			<h4 className="text-xl font-semibold mb-4">Profile Management</h4>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<label
						className="block dark:text-gray-300 text-gray-800 text-xl font-medium  mb-2"
						htmlFor="profile-name">
						Profile Name
					</label>
					<input
						type="text"
						id="profile-name"
						name="profile-name"
						className="mt-1 block w-full rounded-md 
  border-2 border-gray-300 dark:border-gray-600 
  bg-white dark:bg-gray-700
  text-gray-900 dark:text-gray-100
  px-3 py-2 text-sm
  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						defaultValue="Dr. John Doe"
					/>
				</div>
				<div>
					<label
						className="block text-xl font-medium dark:text-gray-300 text-gray-800 mb-2"
						htmlFor="display-name">
						Display Name
					</label>
					<input
						type="text"
						id="display-name"
						name="display-name"
						className="mt-1 block w-full rounded-md 
  border-2 border-gray-300 dark:border-gray-600 
  bg-white dark:bg-gray-700
  text-gray-900 dark:text-gray-100
  px-3 py-2 text-sm
  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						defaultValue="Dr. J. Doe"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium dark:text-gray-300 text-gray-800 mb-2">
						Verified Doctor Status
					</label>
					<div className="mt-2 flex items-center">
						<span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
							Verified
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

const ProfileUpload = () => {
	return (
		<div className="bg-[#ffffff] dark:bg-slate-800 border-2 border-gray-300 dark:border-gray-600 shadow-md rounded-lg p-6 mb-8">
			<h4 className="text-xl font-semibold mb-4">Profile Picture</h4>
			<div className="flex items-center space-x-6">
				<div className="shrink-0">
					<img
						className="h-32 w-32 object-cover rounded-full"
						src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
						alt="Current profile photo"
					/>
				</div>
				<div>
					<label className="block">
						<span className="sr-only">Choose profile photo</span>
						<input
							type="file"
							className="block w-full text-sm text-slate-500
					  file:mr-4 file:py-2 file:px-4
					  file:rounded-full file:border-0
					  file:text-sm file:font-semibold
					  file:bg-indigo-50 file:text-indigo-700
					  hover:file:bg-indigo-100"
						/>
					</label>
					<p className="mt-2 text-sm dark:text-gray-300 text-gray-800">
						JPEG or PNG. 1000x1000 pixels max.
					</p>
				</div>
			</div>
			<div className="mt-4">
				<div className="w-full bg-gray-200 rounded-full h-2.5">
					<div
						className="bg-indigo-600 h-2.5 rounded-full"
						style={{ width: "45%" }}></div>
				</div>
				<p className="text-sm dark:text-gray-300 text-gray-800 mt-2">Upload progress: 45%</p>
			</div>
		</div>
	);
};

const DocotorVerificationStatus = () => {
	return (
		<div className="bg-[#ffffff] dark:bg-slate-800 border-2 border-gray-300 dark:border-gray-600 shadow-md rounded-lg p-6 mb-8">
			<h4 className="text-xl font-semibold mb-4">Doctor Verification Status</h4>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<p className="text-sm font-medium dark:text-gray-300 text-gray-800 mb-2">
						Verification Type
					</p>
					<p className="text-sm dark:text-gray-500 text-gray-600">Medical License</p>
				</div>
				<div>
					<p className="text-sm font-medium dark:text-gray-300 text-gray-800 mb-2">
						Verification Date
					</p>
					<p className="text-sm dark:text-gray-500 text-gray-600">May 15, 2023</p>
				</div>
				<div>
					<p className="text-sm font-medium dark:text-gray-300 text-gray-800 mb-2">Status</p>
					<span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
						Verified
					</span>
				</div>
			</div>
		</div>
	);
};

const ClinicAddress = () => {
	return (
		<div className="bg-[#ffffff] dark:bg-slate-800 border-2 border-gray-300 dark:border-gray-600 shadow-md rounded-lg p-6 mb-8">
			<h4 className="text-xl font-semibold mb-4">Clinic Location/Address</h4>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<label
						className="block text-sm font-medium dark:text-gray-300 text-gray-800 mb-2"
						htmlFor="clinic-address">
						Address
					</label>
					<textarea
						id="clinic-address"
						name="clinic-address"
						rows={3}
						className="mt-1 block w-full rounded-md 
  border-2 border-gray-300 dark:border-gray-600 
  bg-white dark:bg-gray-700
  text-gray-900 dark:text-gray-100
  px-3 py-2 text-sm
  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
						123 Medical Center Dr, Healthville, HC 12345
					</textarea>
				</div>
				<div>
					<label
						className="block text-sm font-medium dark:text-gray-300 text-gray-800 mb-2"
						htmlFor="clinic-phone">
						Phone Number
					</label>
					<input
						type="tel"
						id="clinic-phone"
						name="clinic-phone"
						className="mt-1 block w-full rounded-md 
  border-2 border-gray-300 dark:border-gray-600 
  bg-white dark:bg-gray-700
  text-gray-900 dark:text-gray-100
  px-3 py-2 text-sm
  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						defaultValue="(555) 123-4567"
					/>
				</div>
				<div>
					<label
						className="block text-sm font-medium dark:text-gray-300 text-gray-800 mb-2"
						htmlFor="clinic-email">
						Email Address
					</label>
					<input
						type="email"
						id="clinic-email"
						name="clinic-email"
						className="mt-1 block w-full rounded-md 
  border-2 border-gray-300 dark:border-gray-600 
  bg-white dark:bg-gray-700
  text-gray-900 dark:text-gray-100
  px-3 py-2 text-sm
  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						defaultValue="drjohndoe@example.com"
					/>
				</div>
				<div>
					<label
						className="block text-sm font-medium dark:text-gray-300 text-gray-800 mb-2"
						htmlFor="clinic-hours">
						Opening Hours
					</label>
					<input
						type="text"
						id="clinic-hours"
						name="clinic-hours"
						className="mt-1 block w-full rounded-md 
  border-2 border-gray-300 dark:border-gray-600 
  bg-white dark:bg-gray-700
  text-gray-900 dark:text-gray-100
  px-3 py-2 text-sm
  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						defaultValue="Mon-Fri: 9AM-5PM, Sat: 10AM-2PM"
					/>
				</div>
			</div>
			<div className="mt-6">
				<p className="text-sm font-medium dark:text-gray-300 text-gray-800 mb-2">Map View</p>
				<div className="w-full h-64 bg-gray-300 rounded-lg">
					{/* Replace this div with an actual map integration */}
					<div className="w-full h-full flex items-center justify-center text-gray-500">
						Map Integration Placeholder
					</div>
				</div>
			</div>
		</div>
	);
};

const ProfileSetting = () => {
	return (
		<div className="bg-[#ffffff] dark:bg-slate-800 border-2 border-gray-300 dark:border-gray-600 shadow-md rounded-lg p-6 mb-8">
			<h4 className="text-xl font-semibold mb-4">Profile Settings</h4>
			<div className="space-y-4">
				<div>
					<label className="flex items-center">
						<input
							type="checkbox"
							className="form-checkbox h-5 w-5 text-indigo-600"
							defaultChecked
						/>
						<span className="ml-2 dark:text-gray-300 text-gray-800">
							Show verified doctor badge on profile
						</span>
					</label>
				</div>
				<div>
					<label className="flex items-center">
						<input
							type="checkbox"
							className="form-checkbox h-5 w-5 text-indigo-600"
							defaultChecked
						/>
						<span className="ml-2 dark:text-gray-300 text-gray-800">
							Allow patients to book appointments online
						</span>
					</label>
				</div>
				<div>
					<label className="flex items-center">
						<input
							type="checkbox"
							className="form-checkbox h-5 w-5 text-indigo-600"
						/>
						<span className="ml-2 dark:text-gray-300 text-gray-800">
							Receive email notifications for new appointments
						</span>
					</label>
				</div>
			</div>
		</div>
	);
};

const FilterAndSorting = () => {
	return (
		<div className="bg-[#ffffff] dark:bg-slate-800 border-2 border-gray-300 dark:border-gray-600 shadow-md rounded-lg p-6 mb-8">
			<h4 className="text-xl font-semibold mb-4">Filters and Sorting</h4>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div>
					<label
						className="block text-sm font-medium dark:text-gray-300 text-gray-800"
						htmlFor="filter-date">
						Filter by Date
					</label>
					<input
						type="date"
						id="filter-date"
						name="filter-date"
						className="mt-1 block w-full rounded-md 
  border-2 border-gray-300 dark:border-gray-600 
  bg-white dark:bg-gray-700
  text-gray-900 dark:text-gray-100
  px-3 py-2 text-sm
  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</div>
				<div>
					<label
						className="block text-sm font-medium dark:text-gray-300 text-gray-800 mb-2"
						htmlFor="filter-category">
						Filter by Category
					</label>
					<select
						id="filter-category"
						name="filter-category"
						className="mt-1 block w-full rounded-md 
  border-2 border-gray-300 dark:border-gray-600 
  bg-white dark:bg-gray-700
  text-gray-900 dark:text-gray-100
  px-3 py-2 text-sm
  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
						<option>All Categories</option>
						<option>Appointments</option>
						<option>Messages</option>
						<option>Prescriptions</option>
					</select>
				</div>
				<div>
					<label
						className="block text-sm font-medium dark:text-gray-300 text-gray-800 mb-2"
						htmlFor="sort-order">
						Sort Order
					</label>
					<select
						id="sort-order"
						name="sort-order"
						className="mt-1 block w-full rounded-md 
  border-2 border-gray-300 dark:border-gray-600 
  bg-white dark:bg-gray-700
  text-gray-900 dark:text-gray-100
  px-3 py-2 text-sm
  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
						<option>Ascending</option>
						<option>Descending</option>
					</select>
				</div>
			</div>
		</div>
	);
};

const ActionButtons = () => {
	return (
		<div className="flex justify-end space-x-4">
			<button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
				Save Changes
			</button>
			<button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
				Cancel
			</button>
		</div>
	);
};

const ProfilePage: React.FC = () => {
	return (
		<main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
			<div className="container mx-auto px-6 py-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
				<h3 className="text-[#125872] dark:text-[#4db7dd] font-semibold text-3xl">
					Profile
				</h3>

				<div className="mt-8">
					{/* Section 1: Profile Management */}
					<ProfileManagement />

					{/* Section 2: Profile Picture Uploading */}
					<ProfileUpload />

					{/* Section 3: Doctor Verification Status */}
					<DocotorVerificationStatus />

					{/* Section 4: Clinic Location/Address */}
					<ClinicAddress />

					{/* Section 5: Profile Settings */}
					<ProfileSetting />

					{/* Filters and Sorting */}
					<FilterAndSorting />

					{/* Action Buttons */}
					<ActionButtons />
				</div>
			</div>
		</main>
	);
};

export default ProfilePage;
