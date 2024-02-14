import React from "react";
import GenderSelect from "./GenderSelect";

const SignUp = () => {
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
						/>
					</div>

					{/* Gender */}

					<GenderSelect />
					<a
						href="#"
						className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
						Already have an account?
					</a>

					<div>
						<button className="btn btn-block btn-sm mt-2">Login</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;