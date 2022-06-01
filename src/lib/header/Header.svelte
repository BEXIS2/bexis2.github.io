<script>
	import { page } from '$app/stores';
	//import { token_store, user_store, error_store } from '../../store/local-store';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { base } from '$app/paths';

	//import {Nav} from 'sveltestrap'

	// this ensures localStorage is loaded, however is has a delay.
	// source: https://gist.github.com/JHethDev/7cdd180a941df0168af6e8799c406bd0
	onMount(() => {
		if (browser) {
		//	user_store.useLocalStorage();
		//	token_store.useLocalStorage();
		//	error_store.set('');
		}

		// Log it to make sure it works client side
		//console.log(localStorage.getItem('user'));
	});

	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem
	} from 'sveltestrap/src';

	$: isOpen = null;

	function handleUpdate(event) {
		isOpen = event.detail.isOpen;
	}


</script>

<svelte:window />

<header>
	<Navbar color="light" light expand="md">
		<NavbarBrand href="/"
			>	<img src="{base + '/Logo_BEXIS_rgb_2600x830.png'}" alt="logo" width="200px"></NavbarBrand>
		<NavbarToggler on:click={() => (isOpen = !isOpen)} />
		<Collapse {isOpen} navbar expand="md" on:update={handleUpdate} >
			<Nav class="ms-auto" navbar>
				
				<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/'}>
						<a sveltekit:prefetch href={base + '/'} class="nav-link">Home</a>
					</li>
				</NavItem>

				<!--Software-->
				<Dropdown nav inNavbar>
					<DropdownToggle nav caret>Software</DropdownToggle>
					<DropdownMenu end>
						<DropdownItem><a href={base + '/software/features'} >Features</a></DropdownItem>
						<DropdownItem><a href='{base + '/software/releases'}' >Get Latest Version</a></DropdownItem>
						<DropdownItem><a href='{base + '/software/modules'}' >Modules Overview</a></DropdownItem>
						<DropdownItem divider />
						<DropdownItem><a href='https://demo.bexis2.uni-jena.de/' target="_blank" >Live Demo</a></DropdownItem>
						<DropdownItem><a href='https://github.com/BEXIS2' target="_blank" >Source Code</a></DropdownItem>
					</DropdownMenu>
				</Dropdown>

				<Dropdown nav inNavbar>
					<DropdownToggle nav caret>Community</DropdownToggle>
					<DropdownMenu end>
						<DropdownItem><a href={base + '/community/partnersAndInstances'} >Partners & Instances</a></DropdownItem>
						</DropdownMenu>
				</Dropdown>

				<!-- <NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/software/features'}>
						<a sveltekit:prefetch href={base + '/software/features'} class="nav-link">Features</a>
					</li>
				</NavItem>
				<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/software/releases'}>
						<a sveltekit:prefetch href={base + '/software/releases'} class="nav-link">Releases</a>
					</li>
				</NavItem> -->
			</Nav>
		</Collapse>
	</Navbar>

</header>
