"use client";

import Layout from "@/components/Layout";
import Head from "next/head";
import { Settings, Bell, User, Shield } from "lucide-react";

export default function SettingsPage() {
  return (
    <>
      <Head>
        <title>Settings | BeyondChats</title>
      </Head>
      <Layout>
        <div className="p-6">
          <div className="flex items-center mb-6">
            <Settings className="w-6 h-6 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Account Info */}
            <div className="p-5 rounded-2xl bg-white shadow hover:shadow-md border border-gray-200 transition-all cursor-pointer">
              <div className="flex items-center mb-2">
                <User className="w-5 h-5 text-blue-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-700">Account Info</h2>
              </div>
              <p className="text-sm text-gray-500">
                Manage your email, username, and password.
              </p>
            </div>

            {/* Notification Preferences */}
            <div className="p-5 rounded-2xl bg-white shadow hover:shadow-md border border-gray-200 transition-all cursor-pointer">
              <div className="flex items-center mb-2">
                <Bell className="w-5 h-5 text-blue-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-700">Notifications</h2>
              </div>
              <p className="text-sm text-gray-500">
                Set email or push notifications.
              </p>
            </div>

            {/* Privacy */}
            <div className="p-5 rounded-2xl bg-white shadow hover:shadow-md border border-gray-200 transition-all cursor-pointer">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-blue-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-700">Privacy</h2>
              </div>
              <p className="text-sm text-gray-500">
                Control your data sharing and visibility.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
