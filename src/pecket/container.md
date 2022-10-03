---
type: post
title: VM vs. Container
date: 2022-05-03T04:46:47+07:00
author: ansidev
gravatar: a2ac3c4477e717c7fa15041d907e71fd
twitter: "@ansidev"
permalink: /software-development/vm-vs-container
categories:
  - Software Development
tags:
  - virtualization
  - hypervisor
  - vm
  - virtual machine
  - container
---

My notes about virtualization, hypervisor, virtual machine and container.

<!-- more -->

## Virtualization

### What is virtualization?

> Virtualization is the process of running a virtual instance of a computer system in a layer abstracted from the actual hardware.

### Types of virtualization

All the components of a traditional data center or IT infrastructure can be virtualized today, with various specific types of virtualization:

1. Hardware virtualization

   When virtualizing hardware, virtual versions of computers and operating systems (VMs) are created and consolidated into a single, primary, physical server. A hypervisor communicates directly with a physical server's disk space and CPU to manage the VMs. Hardware virtualization, which is also known as server virtualization, allows hardware resources to be utilized more efficiently and for one machine to simultaneously run different operating systems.

2. Software virtualization

   Software virtualization creates a computer system complete with hardware that allows one or more guest operating systems to run on a physical host machine. For example, Android OS can run on a host machine that is natively using a Microsoft Windows OS, utilizing the same hardware as the host machine does. Additionally, applications can be virtualized and delivered from a server to an end user's device, such as a laptop or smartphone. This allows employees to access centrally hosted applications when working remotely.

3. Storage virtualization

   Storage can be virtualized by consolidating multiple physical storage devices to appear as a single storage device. Benefits include increased performance and speed, load balancing and reduced costs. Storage virtualization also helps with disaster recovery planning, as virtual storage data can be duplicated and quickly transferred to another location, reducing downtime.

4. Network virtualization

   Multiple sub-networks can be created on the same physical network by combining equipment into a single, software-based virtual network resource. Network virtualization also divides available bandwidth into multiple, independent channels, each of which can be assigned to servers and devices in real time. Advantages include increased reliability, network speed, security and better monitoring of data usage. Network virtualization can be a good choice for companies with a high volume of users who need access at all times.

5. Desktop virtualization

   This common type of virtualization separates the desktop environment from the physical device and stores a desktop on a remote server, allowing users to access their desktops from anywhere on any device. In addition to easy accessibility, benefits of virtual desktops include better data security, cost savings on software licenses and updates, and ease of management.

## Hypervisor

### What is hypervisor?

> A hypervisor is a program for enabling the virtualization.

### Types of hypervisor

1. A type 1 hypervisor is on **bare metal**. VM resources are scheduled directly to the hardware by the hypervisor. KVM is an example of a type 1 hypervisor. KVM was merged into the Linux® kernel in 2007, so if you are using a modern version of Linux, you already have access to KVM.
2. A type 2 hypervisor is **hosted**. VM resources are scheduled against a host operating system, which is then executed against the hardware. VMware Workstation and Oracle VirtualBox are examples of type 2 hypervisors.

## What are binaries, libraries, and kernels?

Binaries

> In general, binaries are non-text files made up of ones and zeros that tell a processor how to execute a program.

Libraries

> Libraries are sets of prewritten code that a program can use to do either common or specialized things. They allow developers to avoid rewriting the same code over and over.

Kernels

> Kernels are the ringleaders of the OS. They're the core programming at the center that controls all other parts of the operating system.

## Virtual machine

### What is virtual machine?

> A virtual machine is the emulated equivalent of a computer system that runs on top of another system.

```
    |-> |------------|-----------|-----------|
    |   |   App 1    |   App 2   |   App 3   |
    |   |------------|-----------|-----------|
VM -|   | Bins/Libs  | Bins/Libs | Bins/Libs |
    |   |------------|-----------|-----------|
    |   | Windows OS | Linux OS  | macOS     |
    |-> |------------|-----------|-----------|
        |              Hypervisor            |
        |------------------------------------|
        |               Host OS              |
        |------------------------------------|
        |                Server              |
        |------------------------------------|
```

### Types of virtual machines

> A **process virtual machine** allows a single process to run as an application on a host machine, providing a platform-independent programming environment by masking the information of the underlying hardware or operating system. An example of a process VM is the Java Virtual Machine, which enables any operating system to run Java applications as if they were native to that system.

> A **system virtual machine** is fully virtualized to substitute for a physical machine. A system platform supports the sharing of a host computer's physical resources between multiple virtual machines, each running its own copy of the operating system. This virtualization process relies on a hypervisor, which can run on bare hardware, such as VMware ESXi, or on top of an operating system.

### What are the benefits of virtual machines?

**Cost savings** - running multiple virtual environments from one piece of infrastructure means that you can drastically reduce your physical infrastructure footprint. This boosts your bottom line - decreasing the need to maintain nearly as many servers and saving on maintenance costs and electricity.

**Agility and speed** - Spinning up a VM is relatively easy and quick and is much simpler than provisioning an entire new environment for your developers. Virtualization makes the process of running dev-test scenarios a lot quicker.

**Lowered downtime** - VMs are so portable and easy to move from one hypervisor to another on a different machine - this means that they are a great solution for backup, in the event the host goes down unexpectedly.

**Scalability** - VMs allow you to more easily scale your apps by adding more physical or virtual servers to distribute the workload across multiple VMs. As a result you can increase the availability and performance of your apps.

**Security benefits** -  Because virtual machines run in multiple operating systems, using a guest operating system on a VM allows you to run apps of questionable security and protects your host operating system. VMs also allow for better security forensics, and are often used to safely study computer viruses, isolating the viruses to avoid risking their host computer.

### Use cases for virtual machines

Here are a few ways virtual machines are used:

- Building and deploying apps to the cloud.
- Trying out a new operating system (OS), including beta releases.
- Spinning up a new environment to make it simpler and quicker for developers to run dev-test scenarios.
- Backing up your existing OS.
- Accessing virus-infected data or running an old application by installing an older OS.
- Running software or apps on operating systems that they weren't originally intended for.

## Container

### What are containers?

> Containers are lightweight packages of your application code together with dependencies such as specific versions of programming language runtimes and libraries required to run your software services.

```
           |-> |------------|-----------|-----------|
           |   |   App 1    |   App 2   |   App 3   |
Container -|   |------------|-----------|-----------|
           |   | Bins/Libs  | Bins/Libs | Bins/Libs |
           |-> |------------|-----------|-----------|
               |         Container software         |
               |------------------------------------|
               |               Host OS              |
               |------------------------------------|
               |                Server              |
               |------------------------------------|
```

### What are the benefits of containers?

**Lightweight** - Containers share the machine OS kernel, eliminating the need for a full OS instance per application and making container files small and easy on resources. Their smaller size, especially compared to virtual machines, means they can spin up quickly and better support cloud-native applications that scale horizontally.

**Portable and platform independent** -  Containers carry all their dependencies with them, meaning that software can be written once and then run without needing to be re-configured across laptops, cloud, and on-premises computing environments.

**Supports modern development and architecture** -  Due to a combination of their deployment portability/consistency across platforms and their small size, containers are an ideal fit for modern development and application patterns - such as DevOps, serverless, and microservices - that are built are regular code deployments in small increments.

**Improves utilization** -  Like VMs before them, containers enable developers and operators to improve CPU and memory utilization of physical machines. Where containers go even further is that because they also enable microservice architectures, application components can be deployed and scaled more granularly, an attractive alternative to having to scale up an entire monolithic application because a single component is struggling with load.

### Use cases for containers

**Microservices** - Containers are small and lightweight, which makes them a good match for microservice architectures where applications are constructed of many, loosely coupled and independently deployable smaller services.

**DevOps** - The combination of microservices as an architecture and containers as a platform is a common foundation for many teams that embrace DevOps as the way they build, ship and run software.

**Hybrid, multi-cloud** - Because containers can run consistently anywhere, across laptop, on-premises and cloud environments, they are an ideal underlying architecture for hybrid cloud and multicloud scenarios where organizations find themselves operating across a mix of multiple public clouds in combination with their own data center.

**Application modernizing and migration** - One of the most common approaches to application modernization starts by containerizing them so that they can be migrated to the cloud.

## VMs vs. Containers

| VMs                                   | Containers                                     |
| ------------------------------------- | ---------------------------------------------- |
| Heavyweight.                          | Lightweight.                                   |
| Limited performance.                  | Native performance.                            |
| Each VM runs in its own OS.           | All containers share the host OS.              |
| Hardware-level virtualization.        | OS virtualization.                             |
| Startup time in minutes.              | Startup time in milliseconds.                  |
| Allocates required memory.            | Requires less memory space.                    |
| Fully isolated and hence more secure. | Process-level isolation, possibly less secure. |

## Reference links

- https://www.backblaze.com/blog/vm-vs-containers
- https://cloud.google.com/learn/what-are-containers
- https://www.ibm.com/cloud/learn/containers
- https://opensource.com/resources/virtualization
- https://www.vmware.com/topics/glossary/content/virtual-machine.html
- https://azure.microsoft.com/en-us/overview/what-is-a-virtual-machine
