"use client";
import { Modal } from '@/components/ui/modal';
import { UserButton } from '@clerk/nextjs';

const SetupPage = () => {
  return (
    <>
    <div className="p-4">
        <Modal title = "Test" description = "Testing description" isOpen onClose={() => {}}>
            Children here
        </Modal>
    </div>
    </>
  )
}

export default SetupPage;
