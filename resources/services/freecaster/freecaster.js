/*
*
* This file is part of xVideoServiceThief,
* an open-source cross-platform Video service download
*
* Copyright (C) 2007 - 2009 Xesc & Technology
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
	this.version = "1.0.1";
	this.minVersion = "2.1a";
	this.author = "Xesc & Technology 2009";
	this.website = "http://freecaster.tv/";
	this.ID = "freecaster.tv";
	this.caption = "Freecaster";
	this.adultContent = false;
	this.musicSite = false;
}

function getVideoInformation(url)
{
	const URL_GET_XML = "http://gateway.freecaster.com/VP/%1";
	// video information
	var result = new VideoDefinition();
	// download webpage
	var http = new Http();
	var html = http.downloadWebpage(url);
	// get video title
	result.title = copyBetween(html, "<title>Freecaster.tv:", "</title>");
	// get video id
	var vidId = copyBetween(html, "FCPlayer.swf?id=", "&");
	// download xml
	var xml = http.downloadWebpage(strFormat(URL_GET_XML, vidId));
	// get video url
	result.URL = copyBetween(xml, "label=\"Standard Definition\">", "<");
	// set video extension
	result.extension = ".mov";
	// add referer header
	result.headers = "Referer=" + url;
	// return the video information
	return result;
}

function getVideoServiceIcon()
{
	return new Array(
		0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a,0x00,0x00,0x00,0x0d,0x49,0x48,0x44,0x52,
		0x00,0x00,0x00,0x10,0x00,0x00,0x00,0x10,0x08,0x02,0x00,0x00,0x00,0x90,0x91,0x68,
		0x36,0x00,0x00,0x00,0x09,0x70,0x48,0x59,0x73,0x00,0x00,0x0b,0x13,0x00,0x00,0x0b,
		0x13,0x01,0x00,0x9a,0x9c,0x18,0x00,0x00,0x01,0x9a,0x49,0x44,0x41,0x54,0x28,0x53,
		0x55,0x52,0x49,0x4a,0x03,0x41,0x14,0xad,0xb1,0xbb,0x85,0x90,0x9d,0x44,0x14,0x51,
		0x31,0x98,0xa4,0x13,0x33,0xb8,0x90,0xac,0x24,0x1b,0xd1,0x03,0xe8,0xc2,0x7b,0x48,
		0x4e,0x21,0xb9,0x8d,0xe4,0x04,0xa2,0x3b,0x4d,0xd6,0xa2,0x0b,0x89,0x48,0x8c,0x12,
		0x03,0x62,0x34,0x3d,0xf8,0xba,0x7e,0x53,0xb6,0x45,0xf1,0xa9,0xe1,0x0d,0xbf,0x7e,
		0x7d,0xa6,0x24,0xe7,0x8c,0x39,0x5a,0x22,0x4a,0xc1,0x10,0x31,0x71,0x88,0x35,0x6d,
		0xb5,0x12,0x74,0x48,0x18,0x66,0x2f,0x10,0x3d,0x57,0xdb,0x0b,0x9a,0xc0,0x5a,0x09,
		0xc2,0x30,0x7b,0x67,0xf5,0xb2,0x20,0x92,0xc0,0x74,0x1d,0x45,0x9c,0x14,0x44,0x1b,
		0x8a,0xd9,0x34,0xc8,0x30,0x9b,0x1b,0x53,0x90,0x84,0x11,0xdc,0x4d,0x94,0x26,0x4f,
		0x66,0x24,0xb3,0x12,0x94,0x5e,0xc2,0x20,0x1c,0x8e,0xc1,0xc4,0xa2,0xdd,0xde,0x1f,
		0x0e,0xef,0x46,0xa3,0xa7,0xc7,0x87,0xfb,0x67,0x13,0x3f,0xa6,0xef,0xf3,0xaf,0xcf,
		0x38,0x0e,0xdf,0x26,0xe3,0x5a,0xb5,0x42,0x72,0x4c,0x6b,0x89,0xd8,0xe9,0x1c,0x84,
		0xe1,0x22,0x8a,0x82,0x5e,0xef,0x62,0xaf,0xd5,0xa8,0xfa,0xe5,0x66,0x63,0xb7,0xb4,
		0x53,0x6c,0x35,0xeb,0x8d,0x7a,0x0d,0xe8,0xb5,0xd5,0x95,0xd4,0x01,0xa3,0x50,0x58,
		0x9e,0xcd,0xa6,0x50,0x1a,0x0c,0x6e,0x5b,0xad,0x86,0x5f,0x29,0x01,0x5d,0xdf,0xad,
		0x02,0x5a,0xdc,0xde,0xa2,0xc7,0x08,0x5b,0x38,0x3c,0xab,0xdf,0xbf,0x84,0x36,0x08,
		0xdf,0x8b,0x79,0x14,0x87,0x71,0x1c,0x47,0x51,0x84,0x18,0x04,0x81,0xef,0xfb,0xc2,
		0x0a,0x03,0x8d,0xda,0x1d,0x1f,0x1d,0x02,0x3a,0x99,0x8c,0xf3,0xf9,0x9c,0xe7,0x39,
		0x2c,0x7d,0x79,0x32,0x72,0xb9,0x9c,0x5d,0x4b,0x29,0xd3,0x0a,0xbc,0x8e,0x5f,0x40,
		0xe8,0x76,0xcf,0x53,0x15,0xd8,0x72,0xae,0xb5,0xe6,0xa6,0xf4,0x9e,0xe7,0xd1,0x79,
		0xe2,0x83,0xc7,0xd6,0xca,0xa5,0x30,0xf8,0xb9,0xb9,0xbe,0xb2,0x45,0xcb,0x4a,0x2a,
		0xa5,0xfe,0xe4,0x31,0x5c,0x29,0x1c,0xc1,0xcf,0x4e,0x4f,0x36,0x37,0xd6,0xe9,0x83,
		0xcc,0x1d,0x57,0x22,0x6d,0x10,0x91,0xf8,0x31,0x57,0x3b,0x58,0x48,0x6e,0x1c,0x3c,
		0x25,0x21,0x22,0xff,0x7f,0x30,0x41,0x89,0x46,0x1c,0xa2,0xb1,0x25,0xe3,0x04,0x0e,
		0x9a,0x46,0x9a,0xaf,0xa5,0xf2,0x59,0x87,0xa4,0xa0,0x4a,0x7b,0x8e,0x0b,0x79,0xd3,
		0x1a,0xd8,0x9b,0x08,0x34,0x72,0xa3,0x6e,0x4b,0x9b,0x47,0x82,0x2e,0x08,0x07,0x4e,
		0x72,0xce,0xc5,0x2f,0x57,0x0e,0x64,0xa0,0x13,0xe3,0xc7,0xa3,0x00,0x00,0x00,0x00,
		0x49,0x45,0x4e,0x44,0xae,0x42,0x60,0x82);
}