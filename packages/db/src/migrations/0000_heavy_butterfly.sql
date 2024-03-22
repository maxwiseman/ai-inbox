CREATE TABLE `turbo_account` (
	`userId` text(255) NOT NULL,
	`type` text(255) NOT NULL,
	`provider` text(255) NOT NULL,
	`providerAccountId` text(255) NOT NULL,
	`refresh_token` text(255),
	`access_token` text,
	`expires_at` integer,
	`token_type` text(255),
	`scope` text(255),
	`id_token` text,
	`session_state` text(255),
	PRIMARY KEY(`provider`, `providerAccountId`)
);
--> statement-breakpoint
CREATE TABLE `turbo_session` (
	`sessionToken` text(255) PRIMARY KEY NOT NULL,
	`userId` text(255) NOT NULL,
	`expires` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `turbo_user` (
	`id` text(255) PRIMARY KEY NOT NULL,
	`name` text(255),
	`email` text(255) NOT NULL,
	`emailVerified` integer,
	`image` text(255)
);
--> statement-breakpoint
CREATE TABLE `turbo_verificationToken` (
	`identifier` text(255) NOT NULL,
	`token` text(255) NOT NULL,
	`expires` integer NOT NULL,
	PRIMARY KEY(`identifier`, `token`)
);
--> statement-breakpoint
CREATE TABLE `turbo_post` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text(256) NOT NULL,
	`content` text(256) NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` integer
);
--> statement-breakpoint
CREATE INDEX `userId_idx` ON `turbo_account` (`userId`);--> statement-breakpoint
CREATE INDEX `userId_idx` ON `turbo_session` (`userId`);