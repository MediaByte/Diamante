// NodeJS standard library modules
import { Server } from 'https';
// NPM packages
import { Application, Request, Response, NextFunction } from "express";
import SocketIO from 'socket.io';
import { ClientOpts, RedisClient } from 'redis';
import bcrypt from 'bcrypt';

// Custom Modules
import Socket from '../modules/socket';

// Type definitions for PostgreSQL
export interface IPostgresConfig {
    client: string,
    connection: string | undefined
}
export interface ILoginData {
    hash: string,
    email: string,
    name: string
}

export interface IUserData {
    password: string,
    email: string
}

// Type definitions for HTTPS
export type HTTPSServer = Server;
export type DiamanteApp = Application;
export type RequestHandler = Request;
export type ResponseHandler = Response;
export type NextHandler = NextFunction;
export interface IHTTPSConfig {
    key: Buffer,
    cert: Buffer
}

// Type definitions for Socket Connections
export type SocketServer = SocketIO.Server;
export type SocketHandler = Socket;

// Types for Redis Client
export type RedisURIString = ClientOpts;
export type Redis = RedisClient

//Types for Authentication
export interface IUser {
    email: string,
    id: number
}