/*
*
* This file is part of xVideoServiceThief,
* an open-source cross-platform Video service download
*
* Copyright (C) 2007 - 2011 Xesc & Technology
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with xVideoServiceThief. If not, see <http://www.gnu.org/licenses/>.
*
* Contact e-mail: Xesc <xeskuu.xvst@gmail.com>
* Program URL   : http://xviservicethief.sourceforge.net/
*
*/

function RegistVideoService()
{
	this.version = "1.0.0";
	this.minVersion = "2.0.0a";
	this.author = "crapmaster & Xesc & Technology 2011";
	this.website = "http://www.wtfpeople.com";
	this.ID = "wtfpeople.com";
	this.caption = "WTF People";
	this.adultContent = true;
	this.musicSite = false;
}

function getVideoInformation(url)
{
	// video information
	var result = new VideoDefinition();

	// download webpage
	var http = new Http();
	var html = http.downloadWebpage(url);

	// get video title
	result.title = copyBetween(html, 'class="title"><h1>', '</h1>');

	// get the video  url
	var videoUrl = copyBetween(html, '<div id="mediaspace" name="mediaspace"><a href="', '">');

	result.URL=cleanUrl(videoUrl);

	// return the video information
	return result;
}

function getVideoServiceIcon()
{
	return new Array(
		0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a,0x00,0x00,0x00,0x0d,0x49,0x48,0x44,0x52,
		0x00,0x00,0x00,0x10,0x00,0x00,0x00,0x10,0x08,0x06,0x00,0x00,0x00,0x1f,0xf3,0xff,
		0x61,0x00,0x00,0x00,0x01,0x73,0x52,0x47,0x42,0x00,0xae,0xce,0x1c,0xe9,0x00,0x00,
		0x00,0x09,0x70,0x48,0x59,0x73,0x00,0x00,0x0b,0x13,0x00,0x00,0x0b,0x13,0x01,0x00,
		0x9a,0x9c,0x18,0x00,0x00,0x00,0x07,0x74,0x49,0x4d,0x45,0x07,0xdb,0x08,0x0c,0x07,
		0x1d,0x13,0xb0,0x16,0x89,0x72,0x00,0x00,0x01,0x21,0x49,0x44,0x41,0x54,0x38,0xcb,
		0xc5,0x93,0xb1,0x4a,0xc3,0x50,0x14,0x86,0xbf,0xdb,0x54,0xac,0x74,0x11,0x1c,0x24,
		0xb5,0x60,0xdf,0xc1,0xc9,0x67,0x10,0x37,0xdd,0x9c,0x7d,0x88,0x4e,0xdd,0xba,0x94,
		0x76,0x13,0x2a,0x48,0x16,0x87,0x82,0xa3,0xb3,0x8b,0x38,0x8a,0x5b,0x86,0x0e,0x3a,
		0x45,0xc5,0x41,0xe2,0x6d,0x6d,0x0b,0x26,0xd7,0xe3,0x60,0x12,0x4d,0x53,0x43,0x4b,
		0x07,0xff,0xe9,0x72,0xb8,0xff,0xc7,0xb9,0xe7,0xbf,0x47,0x01,0xc2,0x12,0x2a,0xb0,
		0xa4,0x8a,0xf1,0xc1,0xc3,0xe6,0x9e,0x90,0x51,0xd4,0xd0,0x06,0x05,0xb6,0xb0,0x08,
		0x10,0x3e,0x80,0x32,0x2a,0x65,0xac,0xf2,0x9c,0x06,0x00,0x74,0x78,0xe7,0x81,0x10,
		0x80,0x1a,0x45,0x4e,0x58,0xc7,0x25,0xe4,0x80,0x57,0x6a,0x58,0xec,0xb2,0xca,0x0e,
		0x2b,0xec,0x51,0x4a,0x3c,0x2a,0x9e,0x81,0x87,0x9d,0x69,0xcf,0xaa,0x6c,0x52,0x3e,
		0x3e,0x62,0xed,0x70,0x9f,0x3b,0xd7,0xe5,0xea,0xcc,0xe1,0xf6,0xfa,0x86,0xce,0xa4,
		0xc4,0x76,0xd4,0x01,0x11,0x40,0x3c,0x6c,0x19,0xb6,0xbb,0x62,0x7c,0x2d,0xc6,0xd7,
		0x32,0x6c,0x77,0x65,0xd0,0x68,0xc9,0xb4,0x06,0x8d,0x96,0x78,0xd8,0x12,0xfb,0x52,
		0x00,0xe3,0xeb,0xe4,0xa2,0xf1,0xb5,0x04,0x6e,0x3f,0x03,0x08,0xdc,0x7e,0x0a,0x30,
		0x33,0x05,0xa5,0xd4,0x5c,0xb5,0x4c,0x8c,0x63,0xa7,0xc7,0xe7,0xdb,0x00,0xe3,0x6b,
		0xc6,0x4e,0x8f,0xc9,0xc5,0xe5,0xcf,0x3b,0xe5,0x3b,0x9d,0xdf,0xb5,0x85,0x86,0x18,
		0x9b,0x47,0xa7,0xe7,0x98,0xa7,0x97,0x24,0xc6,0x5c,0x40,0x9e,0xaa,0xb3,0x52,0xd0,
		0xf5,0xa6,0xe4,0x49,0xd7,0x9b,0xe2,0x61,0xff,0x9d,0xc2,0x3c,0x9a,0x06,0xa4,0x7e,
		0xe2,0xa3,0xaa,0x2c,0xbc,0x0b,0xea,0xdf,0xb7,0xf1,0x0b,0xc4,0x19,0xf6,0x4e,0x48,
		0xa3,0x32,0x45,0x00,0x00,0x00,0x00,0x49,0x45,0x4e,0x44,0xae,0x42,0x60,0x82);
}