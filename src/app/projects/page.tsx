export default function ProjectsPage() {
	return (
		<div>
			<h1 className="text-3xl pb-6">Our Projects</h1>
			<h2 id="cloudflare-collection">Cloudflare Collection</h2>
			<p>Why:</p>
			<ul>
				<li>
					We want to make it easier for developers and engineers to
					automate the Cloudflare platform
				</li>
			</ul>
			<p>How:</p>
			<ul>
				<li>
					By creating an Ansible collection with modules for
					interacting with Cloudflare&#39;s API
				</li>
				<li>
					So developers can use a clean and simple pattern to describe
					how they want their Cloudflare account to funtion
				</li>
				<li>
					Also, getting the advantages of Ansible&#39;s features
					<ul>
						<li>Logging</li>
						<li>
							Idempotence
							<ul>
								<li>
									Don&#39;t do something unless it needs to be
									done
								</li>
							</ul>
						</li>
						<li>
							Declarative syntax
							<ul>
								<li>
									Tell me what you want the end results to
									look like and I&#39;ll get you there
								</li>
							</ul>
						</li>
						<li>
							Check Mode
							<ul>
								<li>
									Tell me what you would do without actually
									doing it (&quot;dry run&quot;)
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
			<p>Context:</p>
			<ul>
				<li>
					Ansible is a popular, open-source tool that is used to
					manage hosts, applications, and 3rd party platforms
					<ul>
						<li>
							Basically, a way to automate the infrastructure
							required to run your code
						</li>
					</ul>
				</li>
				<li>
					Cloudflare is a platform that helps you manage
					<ul>
						<li>
							DNS records
							<ul>
								<li>
									The service that lets you use a domain name
									like &quot;my.website.com&quot; to visit a
									server with an IP address like 111.76.164.3)
								</li>
							</ul>
						</li>
						<li>
							Reverse Proxies{" "}
							<ul>
								<li>
									A server that &quot;stands in between&quot;
									the server that hosts your application
								</li>
								<li>
									Benefits include protecting your server from
									attacks, providing free and auto-renewable
									certificates for a securet connection (TLS),
									and masking or &quot;hiding&quot; the actual
									IP address used by your server
								</li>
							</ul>
						</li>
						<li>
							Tunnels
							<ul>
								<li>
									Somewhat of an alternative solution to a
									Reverse Proxy, this technology makes it so
									your server can still answer requests
									without it being possible to reach the
									server directly from the outside internet
								</li>
								<li>
									It does this by using Cloudflare to
									&quot;answer&quot; requests from outside
									users while your server reaches out to
									Cloudflare to get the most recent requests
									and handle them.
								</li>
								<li>
									A &quot;Don&#39;t call us, we&#39;ll call
									you&quot; type of approach
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
			<p>Code:</p>
			<ul>
				<li>
					<a href="https://github.com/codekaizen-github/cloudflare-ansible-collection">
						https://github.com/codekaizen-github/cloudflare-ansible-collection
					</a>
				</li>
			</ul>
			<h2 id="docker-collection">Docker Collection</h2>
			<p>Why:</p>
			<ul>
				<li>
					We want to add features to the existing Ansible collection
					that is used to directly manage Docker containers
				</li>
				<li>
					So that developers can use Ansible to take full advantage of
					the features that Docker offers
				</li>
			</ul>
			<p>How:</p>
			<ul>
				<li>
					By adding new modules to the existing community Ansible
					Docker collection
				</li>
				<li>
					Specifically, we are working on adding a module to copy
					files out of a Docker container and onto the filesystem of
					the host that the container is running on
				</li>
			</ul>
			<p>Context:</p>
			<ul>
				<li>
					Ansible is a popular, open-source tool that is used to
					manage hosts, applications, and 3rd party platforms
					<ul>
						<li>
							Basically, a way to automate the infrastructure
							required to run your code
						</li>
					</ul>
				</li>
				<li>
					Docker is a popular, open-source tool that is used to run
					code inside of &quot;containers&quot;
					<ul>
						<li>
							Containers are a way to isolate and encapsulate code
							so it can be easily moved to new platforms
						</li>
						<li>
							Containers can also be scaled to handle larger
							workloads by creating multiple instances of the same
							container description, or &quot;image&quot;
						</li>
					</ul>
				</li>
			</ul>
			<p>Code:</p>
			<ul>
				<li>
					<a href="https://github.com/codekaizen-github/community.docker">
						https://github.com/codekaizen-github/community.docker
					</a>
				</li>
			</ul>
			<h2 id="portainer-collection">Portainer Collection</h2>
			<p>Why:</p>
			<ul>
				<li>
					We want to make it easier for developers and engineers to
					automate the Portainer application
				</li>
			</ul>
			<p>How:</p>
			<ul>
				<li>
					By creating an Ansible collection with modules for
					interacting with Portainer&#39;s API
				</li>
				<li>
					So developers can use a clean and simple pattern to describe
					how they want their Portainer application to funtion
				</li>
				<li>
					Also, getting the advantages of Ansible&#39;s features
					<ul>
						<li>Logging</li>
						<li>
							Idempotence
							<ul>
								<li>
									Don&#39;t do something unless it needs to be
									done
								</li>
							</ul>
						</li>
						<li>
							Declarative syntax
							<ul>
								<li>
									Tell me what you want the end results to
									look like and I&#39;ll get you there
								</li>
							</ul>
						</li>
						<li>
							Check Mode
							<ul>
								<li>
									Tell me what you would do without actually
									doing it (&quot;dry run&quot;)
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
			<p>Context:</p>
			<ul>
				<li>
					Ansible is a popular, open-source tool that is used to
					manage hosts, applications, and 3rd party platforms
					<ul>
						<li>
							Basically, a way to automate the infrastructure
							required to run your code
						</li>
					</ul>
				</li>
				<li>
					Portainer is a popular, open-source tool that is used to
					manage Docker containers across multiple hosts
					<ul>
						<li>
							It provides a web UI where you can view which hosts
							are in your &quot;system&quot;
						</li>
						<li>
							From this UI, you can manage any of your hosts -
							starting and stopping containers
						</li>
					</ul>
				</li>
			</ul>
			<p>Code: </p>
			<ul>
				<li>
					<a href="https://github.com/codekaizen-github/portainer-ansible-collection">
						https://github.com/codekaizen-github/portainer-ansible-collection
					</a>
				</li>
			</ul>
			<h2 id="liker">Liker</h2>
			<p>Why:</p>
			<ul>
				<li>
					This project is a proof of concept for several ideas related
					to distributed computing
					<ul>
						<li>
							Total Order Broadcast (Atomic Broadcast):{" "}
							<a href="https://en.wikipedia.org/wiki/Atomic_broadcast">
								https://en.wikipedia.org/wiki/Atomic_broadcast
							</a>
						</li>
						<li>
							Event Sourcing:{" "}
							<a href="https://martinfowler.com/eaaDev/EventSourcing.html">
								https://martinfowler.com/eaaDev/EventSourcing.html
							</a>
						</li>
						<li>
							Using Websockets to &quot;push&quot; real-time event
							data to web clients
						</li>
						<li>OAuth 2.0 authentication and authorization</li>
					</ul>
				</li>
			</ul>
			<p>How:</p>
			<ul>
				<li>
					Create an application where users can
					<ul>
						<li>Log in using Google Single Sign On (SSO)</li>
						<li>
							Join a real-time &quot;game&quot; where they can
							compete with other users to increment a counter to a
							set number
						</li>
						<li>
							View real-time updates as other users influence the
							game&#39;s state
						</li>
						<li>
							Write to a single &quot;event log&quot; of
							append-only events
						</li>
						<li>
							Read from multiple replicas of the application data;
							to simulate real-world performance concerns
						</li>
					</ul>
				</li>
			</ul>
			<p>Context:</p>
			<ul>
				<li>
					This is based on theories outlined in the book Designing
					Data-Intensive Applications: The Big Ideas Behind Reliable,
					Scalable, and Maintainable Systems
					<ul>
						<li>
							<a href="https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321">
								https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321
							</a>
						</li>
					</ul>
				</li>
			</ul>
			<p>Code:</p>
			<ul>
				<li>
					<a href="https://github.com/codekaizen-github/liker-frontend">
						https://github.com/codekaizen-github/liker-frontend
					</a>
				</li>
				<li>
					<a href="https://github.com/codekaizen-github/liker-event-log">
						https://github.com/codekaizen-github/liker-event-log
					</a>
				</li>
				<li>
					<a href="https://github.com/codekaizen-github/liker-stream-processor-deduplicator">
						https://github.com/codekaizen-github/liker-stream-processor-deduplicator
					</a>
				</li>
				<li>
					<a href="https://github.com/codekaizen-github/liker-stream-processor-user-events">
						https://github.com/codekaizen-github/liker-stream-processor-user-events
					</a>
				</li>
				<li>
					<a href="https://github.com/codekaizen-github/liker-stream-processor-truth-sayer">
						https://github.com/codekaizen-github/liker-stream-processor-truth-sayer
					</a>
				</li>
			</ul>
		</div>
	);
}
