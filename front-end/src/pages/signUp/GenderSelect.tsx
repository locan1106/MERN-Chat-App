import React from "react";

const GenderSelect = () => {
	return (
		<div className="flex gap-4">
			<div className="form-control">
				<label htmlFor="male" className="label gap-2 cursor-pointer">
					<input
						type="radio"
						name="gender"
						id="male"
						className="check-box border-slate-900"
					/>
					<span className="label-text">Male</span>
				</label>
			</div>
			<div className="form-control">
				<label htmlFor="female" className="label gap-2 cursor-pointer">
					<input
						type="radio"
						name="gender"
						id="female"
						className="check-box border-slate-900"
					/>
					<span className="label-text">Female</span>
				</label>
			</div>
		</div>
	);
};

export default GenderSelect;
