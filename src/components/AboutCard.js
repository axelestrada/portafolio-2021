import React from 'react';
import CardContent from './CardContent';

export default function AboutCard() {
	return (
		<div className="about-card m-1.5 mt-2.5 p-7 overflow-hidden" id="about">
			<CardContent title="About Me">
				<div className="content relative">
					<div className="pt-5 pb-5 font-medium">
						<p className="">
							I am Axel Estrada, web developer from Tegucigalpa, Honduras and currently i am studying computer
							engineering. I have experience in development of websites an web applications using frameworks like React,
							Vue and Angular. also i am good in Node.js, PHP and MySql. I would love to talk if you have any project in
							mind.
						</p>
					</div>

					<div className="info">
						<ul className="flex flex-wrap">
							<div className="w-full">
								<InfoItem title="Age" value="18" />
								<InfoItem title="Residence" value="Honduras" />
							</div>

							<div className="w-full">
								<InfoItem title="Freelance" value="Available" />
								<InfoItem title="Address" value="Tegucigalpa, Honduras" />
							</div>
						</ul>
					</div>
				</div>
			</CardContent>
		</div>
	);
}

function InfoItem({ title, value }) {
	return (
		<li className="font-medium">
			<span className="font-semibold uppercase text-white85">{title + ' . . . . '}</span>
			{value}
		</li>
	);
}
