CC=gcc
CXX=g++
LD=ld

CFLAGS=-Wall
CXXFLAGS=-Wall
LDFLAGS=-Wall

all: flvstreamer

clean:
	rm -f *.o

streams: bytes.o log.o rtmp.o AMFObject.o rtmppacket.o streams.o parseurl.o handshake.o
	$(CXX) $(LDFLAGS) $^ -o $@_x86 -lpthread

flvstreamer: bytes.o log.o rtmp.o AMFObject.o rtmppacket.o flvstreamer.o parseurl.o handshake.o
	$(CXX) $(LDFLAGS) $^ -o $@_x86

bytes.o: bytes.cpp bytes.h Makefile
log.o: log.cpp log.h Makefile
rtmp.o: rtmp.cpp rtmp.h log.h AMFObject.h Makefile
AMFObject.o: AMFObject.cpp AMFObject.h log.h rtmp.h Makefile
rtmppacket.o: rtmppacket.cpp rtmppacket.h log.h Makefile
flvstreamer.o: flvstreamer.cpp rtmp.h log.h AMFObject.h Makefile
parseurl.o: parseurl.cpp parseurl.h log.h Makefile
streams.o: streams.cpp log.h Makefile
handshake.o: handshake.cpp log.h Makefile

