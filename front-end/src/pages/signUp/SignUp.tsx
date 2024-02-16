import React, { useState } from "react";
import GenderSelect from "./GenderSelect";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
	const [data, setData] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignUp();

	const handleChangeValueInput = (idInput: string, valueInput: string) => {
		setData({ ...data, [idInput]: valueInput });
	};

	const handleChangeGender = (gender: string) => {
		setData({ ...data, gender });
	};

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		await signup(data);
	};

	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<h1 className="text-3xl font-semibold text-center text-gray-300">
					Sign Up
					<span className="text-blue-500"> ChatApp</span>
				</h1>

				<form action="">
					<div>
						<label htmlFor="" className="label p-2">
							<span className="text-base label-text">Full name</span>
						</label>
						<input
							type="text"
							placeholder="An Pham Loc"
							className="w-full input input-bordered h-10"
							value={data.fullName}
							id="fullName"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								handleChangeValueInput(e.target.id, e.target.value)
							}
						/>
					</div>
					<div>
						<label htmlFor="" className="label p-2">
							<span className="text-base label-text">Username</span>
						</label>
						<input
							type="text"
							placeholder="anphamloc"
							className="w-full input input-bordered h-10"
							value={data.username}
							id="username"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								handleChangeValueInput(e.target.id, e.target.value)
							}
						/>
					</div>
					<div>
						<label htmlFor="" className="label p-2">
							<span className="text-base label-text">Password</span>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							className="w-full input input-bordered h-10"
							value={data.password}
							id="password"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								handleChangeValueInput(e.target.id, e.target.value)
							}
						/>
					</div>
					<div>
						<label htmlFor="" className="label p-2">
							<span className="text-base label-text">Confirm Password</span>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							className="w-full input input-bordered h-10"
							value={data.confirmPassword}
							id="confirmPassword"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								handleChangeValueInput(e.target.id, e.target.value)
							}
						/>
					</div>

					{/* Gender */}

					<GenderSelect
						selectedGender={data.gender}
						handleChange={handleChangeGender}
					/>
					<Link
						to="/login"
						className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
						Already have an account?
					</Link>

					<div>
						<button
							className="btn btn-block btn-sm mt-2"
							onClick={(e) => handleSubmit(e)}
							disabled={loading}>
							{loading ? (
								<span className="loading loading-spinner"></span>
							) : (
								"Sign Up"
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
