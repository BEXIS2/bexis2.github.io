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
	

	<Navbar
	  class="fixed-top" expand="md" light>
		<NavbarBrand href="/"
			>	<img src="{base + 'Logo_BEXIS_rgb_2600x830.png'}" alt="logo" width="200px"></NavbarBrand>
		<NavbarToggler on:click={() => (isOpen = !isOpen)} />
		<Collapse {isOpen} navbar expand="md" on:update={handleUpdate} >
			<Nav class="" navbar>
				<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/'}>
						<a sveltekit:prefetch href={base + '/'} class="nav-link">Home</a>
					</li>
				</NavItem>
				<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/software/features'}>
						<a sveltekit:prefetch href={base + '/software/features'} class="nav-link">Features</a>
					</li>
				</NavItem>
				<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/software/releases'}>
						<a sveltekit:prefetch href={base + '/software/releases'} class="nav-link">Releases</a>
					</li>
				</NavItem>
			<!--	<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/'}>
						<a sveltekit:prefetch href={base + '/'} class="nav-link">Home</a>
					</li>
				</NavItem>-->
				<!--	<NavItem>
				<li class="nav-item" class:active={$page.url.pathname === base + '/test'}>
					<a sveltekit:prefetch href={base + '/test'} class="nav-link">Test Page</a>
				</li>
			</NavItem>-->
			<!--	<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/learn'}>
						<a sveltekit:prefetch href={base + '/learn'} class="nav-link">Learn</a>
					</li>
				</NavItem>
				<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/explore'}>
						<a sveltekit:prefetch href={base + '/explore'} class="nav-link">Explore</a>
					</li>
				</NavItem>
				<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/analyze'}>
						<a sveltekit:prefetch href={base + '/analyze'} class="nav-link">Analyze</a>
					</li>
				</NavItem>
				<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/lifegate'}>
						<a sveltekit:prefetch href={base + '/lifegate'} class="nav-link">LifeGate</a>
					</li>
				</NavItem>
				<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/iknow'}>
						<a sveltekit:prefetch href={base + '/iknow'} class="nav-link">Knowledge Graphs</a>
					</li>
				</NavItem>-->

				<!--		{#if $user_store != ''}
					<NavItem>
						<li class="nav-item" class:active={$page.url.pathname === base + '/login'}>
							<a sveltekit:prefetch href={base + '/login'} class="nav-link"
								>{$user_store.username}</a
							>
						</li>
					</NavItem>
				{/if}
				<NavItem>
					{#if $token_store == ''}
						<li class="nav-item" class:active={$page.url.pathname === base + '/login'}>
							<a sveltekit:prefetch href={base + '/login'} class="nav-link">Login</a>
						</li>
					{:else}
						<li class="nav-item" class:active={$page.url.pathname === base + '/logout'}>
							<a sveltekit:prefetch href={base + '/logout'} class="nav-link">Logout</a>
						</li>
					{/if}
				</NavItem>-->
				<!--	<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/imprint'}>
						<a sveltekit:prefetch href={base + '/imprint'} class="nav-link">Imprint</a>
					</li>
				</NavItem>-->
				
				<Dropdown nav inNavbar>
					<DropdownToggle nav caret>Resources</DropdownToggle>
					<DropdownMenu end>
						<DropdownItem><a href={base + '/resources/manuals'} >Manuals</a>
						</DropdownItem>
						<DropdownItem>...</DropdownItem>
						<DropdownItem divider />
						<DropdownItem>...</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			
			</Nav>
		</Collapse>
	</Navbar>

</header>
